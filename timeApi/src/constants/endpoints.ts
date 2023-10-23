export enum Endpoint {
    HEALTH = "/health",
    TIME = "/time",
    LOCAL = TIME + "/local",
    ZONE = TIME + "/zone/:zone",
}