
const METADATA_KEY_PARAMTYPES = "design:paramtypes";
const CTOR_PARAMETERS_JPA = "ctorParametersJPA";
const reflect = global.Reflect;

if (!reflect.metadata && !reflect.getOwnMetadata) {
  reflect.metadata = (metadataKey, metadataValue) => (target, key) => {
    if (metadataKey === METADATA_KEY_PARAMTYPES && key === undefined) { // key undefined is ctor
      target[CTOR_PARAMETERS_JPA] = metadataValue;
    }
  }
  reflect.getOwnMetadata = (metadata, target, key) => {
    if (metadata === METADATA_KEY_PARAMTYPES && key === undefined) { // key undefined is ctor
      return target[CTOR_PARAMETERS_JPA];
    }
  }
}
