export type AmplifyDependentResourcesAttributes = {
    "function": {
        "users": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "hello": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "reactadminlayerLbd": {
            "Arn": "string"
        },
        "helloLayer": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "user": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "hello": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "layerapi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}