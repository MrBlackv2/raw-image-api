import express from 'express';
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';

import * as controller from '../controllers';

export const router = express.Router();

const checkJwt = auth({
  audience: process.env.JWT_AUDIENCE,
  issuerBaseURL: process.env.JWT_ISSUER_BASE_URL,
  tokenSigningAlg: 'RS256',
});

router.post(
  '/txt2img/full',
  checkJwt,
  requiredScopes(['generate:full']),
  controller.txt2imgFull
);

router.post('/txt2img', controller.txt2img);
