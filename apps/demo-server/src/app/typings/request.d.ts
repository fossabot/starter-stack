import { DefaultBody, DefaultHeaders, DefaultParams, DefaultQuery, FastifyRequest } from 'fastify';
import { IncomingMessage } from 'http';

export type GenericHeaders = {
	authorization?: string;
} & DefaultHeaders;

export type GenericRequest = FastifyRequest<IncomingMessage, DefaultQuery, DefaultParams, GenericHeaders, DefaultBody>;
