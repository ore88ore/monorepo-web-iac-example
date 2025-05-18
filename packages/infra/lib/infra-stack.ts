import * as cdk from "aws-cdk-lib";
import { aws_lambda_nodejs as nodejs } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as path from "path";

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new nodejs.NodejsFunction(this, "UuidGeneratorFunction", {
      entry: path.join(__dirname, "../lambda/uuid-generator.ts"),
      handler: "handler",
      functionName: "uuid-generator",
    });
  }
}

