import { normalizeToArray } from '@app/functions';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class MetaService {
	public constructor(private readonly reflector: Reflector) {}

	public retrieve<K = string, V = string>(context: ExecutionContext, key: K): V[] {
		return [...this.classMetadata<K, V>(context, key), ...this.handlerMetadata<K, V>(context, key)].filter(meta => !!meta);
	}

	public classMetadata<K = string, V = string>(context: ExecutionContext, key: K): V[] {
		return normalizeToArray(this.reflector.get<V>(key, context.getClass()));
	}

	public handlerMetadata<K = string, V = string>(context: ExecutionContext, key: K): V[] {
		return normalizeToArray(this.reflector.get<V>(key, context.getHandler()));
	}
}
