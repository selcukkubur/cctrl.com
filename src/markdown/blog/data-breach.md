---
templateKey: blog-post
title: How the largest Romanian real estate portal could have prevented a massive cloud data breach
authors: Ovidiu Cical
permalink: realestate-data-breach
categories:
    - News
date: 2021-02-09T06:08:46.468Z
description: The adoption of public cloud providers can bring many advantages to a business, but at the same time, cybersecurity threats can appear because of this usage.
featuredpost: true
featuredimage: /img/data-breach.webp
tags:
    - data breach prevention
    - CSPM
    - exposed bucket
    - GDPR
---

### Can cloud misconfigurations affect your company?

Yes, they can! In this case, Romania's largest real estate portal has suffered a data breach due to a misconfiguration. Website Planet detected that the portal's AWS S3 buckets were publicly available without any protection, back in December 2020. As a result, more than 200,000 records were exposed.

Anyone with the URL could access the buckets and Personal Identifying Information (PII) stored there. Users' data such as full names, emails, phone numbers, Social Security Numbers (CNP), or even scanned copies of national ID cards including identifying codes were leaked.

The AWS (Amazon Web Services) S3 Access Points feature provides settings for access points, buckets, and accounts to help companies manage the public access to their resources. More information can be found on Amazon's Documentation Portal:
https://aws.amazon.com/
premiumsupport/
knowledge-center/
read-access-objects-s3-bucket

By default, new buckets do not allow public access. However, users can modify bucket policies and allow public access. Since these individual settings are customizations enabled to better suit a specific organization's needs, the responsibility is no longer with the cloud provider.

Even if the unintentional breach was fixed after Website Planet reported it, the precise number of people affected remains unknown and the culpability for this data leak lies entirely with the real estate portal.

This could have easily been prevented with the implementation of a [Cloud Security Posture Management (CSPM) tool](https://cyscale.com/products/cloud-security-posture-management/). These solutions are developed to [detect any misconfigurations](https://cyscale.com/use-cases/cloud-misconfigurations/) and to prevent this type of event.

As a [CSPM](https://cyscale.com/blog/cloud-security-posture-management-cspm-guide/), Cyscale Cloud Platform is the perfect tool that helps companies reduce risk. It enables complete visibility and control over cloud accounts in under 5 minutes since deployment.

Cyscale's platform is equipped with an alert mechanism, that detects and informs security and cloud ops about exposed assets and helps them address these issues in time.

Mistakes such as having your company's buckets exposed, without password protection or encryption can be detected and fixed in time, you just need someone to guide you. We are ready to assist you with your Cloud Security.
