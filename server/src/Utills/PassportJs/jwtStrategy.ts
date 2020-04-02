import { prisma } from "./../../generated/prisma-client/index";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

const JwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.APP_SECRET
};
const veryfyUser = async (payload, done) => {
  try {
    const [User] = await prisma.users({ where: { id: payload.id } });
    if (User !== null) {
      return done(null, User);
    } else {
      return done(null, false);
    }
  } catch (error) {
    console.log(`Ubable To create Srategy ${error.message}`);
    return done(null, false);
  }
};

export const authenticateJwt = (req, res, next) =>
  passport.authenticate("jwt", (error, user) => {
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);

passport.use(new Strategy(JwtOptions, veryfyUser));
