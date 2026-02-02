---
title: How I host my website for under a dollar per month
---

# How I host my website for under a dollar per month

<div class="meta">January 10, 2024 · M Warner</div>

<div class="tags">
  <span class="tag">aws</span>
  <span class="tag">cloudfront</span>
  <span class="tag">s3</span>
  <span class="tag">cdk</span>
  <span class="tag">hosting</span>
</div>

---

AWS offers generous free tiers for personal or low traffic usage as a preview
for some of its technologies. Using `cdk` I configure all of my infrastructure
as code. I push my code to github, which is monitored by an AWS code pipeline
which automatically builds and deploys my changes.

Here is a brief rundown of the technologies I use:

- Github - A place I can host my private code.
- Route53 - This is where my recurring costs come from. Route53 manages both my domain, and a hosted zone to route traffic to all of the AWS services I use.
- Cloudfront - This is where I serve my static assets. For my use case, this is an entire client side application.
- S3 - Used for Storing static assets
- CodePipeline - Continuous integration. Here I kick off steps to build code, synthesize infrastructure, and deploy it.
- CodeBuild - A step in the pipeline. It takes my code and compiles the artifacts using `npm build` and `cdk synth`.

#### References

- [aws s3 and cloudfront](https://aws-cdk.com/deploying-a-static-website-using-s3-and-cloudfront)
