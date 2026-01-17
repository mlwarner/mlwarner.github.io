---
slug: cloudfront-s3-hosting
title: How I host my website for under a dollar per month
authors: [mlwarner]
tags: [aws, cloudfront, s3, cdk, hosting]
---

AWS offers generous free tiers for personal or low traffic usage as a preview
for some of its technologies. Using `cdk` I configure all of my infrastructure
as code. I push my code to github, which is monitored by an AWS code pipeline
which automatically builds and deploys my changes.

<!--truncate-->

Here is a brief rundown of the technologies I use:

- Github - A place I can host my private code.
- Route53 - This is where my recurring costs come from. Route53 manages both my domain, and a hosted zone to route traffic to all of the AWS services I use.
- Cloudfront - This is where I serve my static assets. For my use case, this is an entire client side application.
- S3 - Used for Storing static assets
- CodePipeline - Continuous integration. Here I kick off steps to build code, synthesize infrastructure, and deploy it.
- CodeBuild - A step in the pipeline. It takes my code and compiles the artifacts using `npm build` and `cdk synth`.

#### References

- [aws s3 and cloudfront](https://aws-cdk.com/deploying-a-static-website-using-s3-and-cloudfront)
