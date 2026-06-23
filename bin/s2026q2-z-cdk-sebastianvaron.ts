#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { HelloCdkStack } from '../lib/s2026q2-z-cdk-sebastianvaron-stack';

const app = new cdk.App();
new HelloCdkStack(app, 'HelloCdkStack', {
  env: { 
    account: '891377180652', 
    region: 'us-east-1' 
  },
});