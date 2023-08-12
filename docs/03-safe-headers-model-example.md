---
sidebar_position: 3
title: SAFe Requirements Model using Headers
---

# My AwesomeApp SAFe Requirements Model with Headers

:::info

This is an example of a generic document with no specific content type. It is used to demonstrate how complex is to handle the requirements when you DON'T use ASXcelerator solution. Later on, we will show how easy is to handle the requirements when you DO use ASXcelerator solution comparing this document with the ASXcelerator generated ones.

:::

My AwesomeApp is a fake social media app that allows users to share their thoughts and experiences with friends and family. This document outlines the product requirements for `My AwesomeApp` following the [SAFe Requirements Model](https://scaledagileframework.com/safe-requirements-model/), which allows us to define and manage requirements at the epic, feature, and user story levels. This is a living document that will be updated as the product evolves and new requirements are identified.

We decided to use this model because it allows us to define requirements in a way that is easy to understand and communicate. It also helps us to prioritize requirements based on their business value and impact on the user experience. With this agile approach, we can quickly adapt to changing requirements and deliver value to our customers faster.

Following this model, we can define the following requirements for `My AwesomeApp`:

## Epic: User Authentication  

**Outcomes Hypothesis:** By providing flexible authentication options, we expect to see higher user adoption and increased account security.

### Feature: Social Media Login

- **Benefit Hypothesis:** Allowing social media login will streamline the authentication process, leading to quicker user onboarding.

#### Acceptance Criteria:

  1. Implement Facebook and Twitter OAuth integrations.
  2. Users should see the option to log in via Facebook or Twitter on the login page.
   
##### User Story: As a user, I want to log in using my Facebook account.

  - **Acceptance Test:**
   - **Given:** The user is on the login page.
   - **When:** They click the "Log in with Facebook" button.
   - **Then:** They should be redirected to Facebook for authentication.

##### User Story: As a user, I want to log in using my Twitter account.

  - **Acceptance Test:**
    - **Given:** The user is on the login page.
    - **When:** They click the "Log in with Twitter" button.
    - **Then:** They should be redirected to Facebook for authentication.

  - **Benefit Hypothesis:** Social media login will attract users who prefer using their existing social media accounts, increasing engagement.
  - 
#### Acceptance Criteria:

  1. Users should be able to link their existing app account with their social media profiles.
  2. Users' profile pictures and basic information should be imported from the social media account.

##### User Story: As a user, I want to use my current profile picture and basic info from Facebook.

 - **Acceptance Test:**
   - **Given:** The user is logged in with their app account.
   - **When:** They link their Facebook account.
   - **Then:** Their profile picture and basic info should update to match their Facebook profile.

### Feature: Email Login

  - **Benefit Hypothesis:** Offering email login provides a familiar authentication method for users who prefer not to use social media accounts.
  - 
#### Acceptance Criteria:

  1. Implement email and password validation during login.
  2. Users should see a "Forgot password" option on the login page.

##### User Story: As a user, I want to log in using my email and password.

 - **Acceptance Test:**
   - **Given:** The user is on the login page.
   - **When:** They enter their valid email and password.
   - **Then:** They should be successfully logged in.
 - **Acceptance Test:**
   - **Given:** The user is on the login page.
   - **When:** They enter an invalid email or password.
   - **Then:** They should see an error message.

##### User Story: As a user, I want to reset my password.

  - **Acceptance Test:**
    - **Given:** The user is on the login page.
    - **When:** They click the "Forgot password" link.
    - **Then:** They should be redirected to the password reset page.
  - **Acceptance Test:**
    - **Given:** The user is on the password reset page.
    - **When:** They enter their email address.
    - **Then:** They should receive an email with a password reset link.
  - **Acceptance Test:**
    - **Given:** The user is on the password reset page.
    - **When:** They enter an invalid email address.
    - **Then:** They should see an error message.

  - **Benefit Hypothesis:** Enabling password reset enhances user experience and reduces support requests for forgotten passwords.
  - 
#### Acceptance Criteria:

  1. Users should receive an email with a password reset link when they request it.
  2. Clicking the reset link should redirect users to a page where they can set a new password.

##### User Story: As a user, when I receive a password reset email, I want to be able to set a new password.

 - **Acceptance Test:**
   - **Given:** The user click the reset link and is redirected to the password reset page.
   - **When:** They enter and confirm a new password.
   - **Then:** Their password should be successfully updated. 

##### User Story: As a user, I expect to receive a password reset email when I request it.

  - **Acceptance Test:**
    - **Given:** The user provided a valid email address.
    - **When:** They receive the password reset email.
    - **Then:** The email should contain a link to the password reset page.

## Epic: Profile Management  

**Outcomes Hypothesis:** By providing users with control over their profile information, we aim to enhance user satisfaction and engagement.

### Feature: Update Profile Information

  - **Benefit Hypothesis:** Allowing users to edit their profile details encourages them to keep their information up to date.
  
#### Acceptance Criteria:

  1. Users should be able to edit their name, bio, and contact information.
  2. Changes made to the profile should be saved and reflected across the app.
   
##### User Story: As a user, I want to update my profile information.

 - **Acceptance Test:**
   - **Given:** The user is on their profile editing page.
   - **When:** They update their bio and contact information.
   - **Then:** The changes should be visible on their profile page.

  - **Benefit Hypothesis:** Allowing profile picture uploads personalizes the user experience and encourages users to express themselves.
  
#### Acceptance Criteria:

  1. Users should be able to upload a profile picture from their device.
  2. The uploaded picture should be displayed on their profile.

##### User Story: As a user, I want to upload a profile picture.

 - **Acceptance Test:**
   - **Given:** The user is on their profile editing page.
   - **When:** They upload a profile picture.
   - **Then:** The uploaded picture should be visible on their profile page.

### Feature: Privacy Settings

  - **Benefit Hypothesis:** Providing privacy controls empowers users to manage their online presence and protect their information.

#### Acceptance Criteria:

  1. Users should be able to choose who can see their posts: public, friends, or private.
  2. Changes to privacy settings should be immediately effective.

##### User Story: As a user, I want to choose who can see my posts.

 - **Acceptance Test:**
   - **Given:** The user is on the privacy settings page.
   - **When:** They select "Friends" as the audience for their posts.
   - **Then:** Their posts should only be visible to their friends.

##### User Story: As a user, I want to choose who can see my profile.

  - **Acceptance Test:**
    - **Given:** The user is on the privacy settings page.
    - **When:** They select "Private" as the audience for their profile.
    - **Then:** Their profile should only be visible to their friends.

##### User Story: As a user, I want to hide my posts from certain users.

  - **Acceptance Test:**
    - **Given:** The user is on the privacy settings page.
    - **When:** They add a user to their block list.
    - **Then:** The blocked user should not be able to see their posts.

  - **Benefit Hypothesis:** Giving users the option to hide their online status enhances their privacy and control over their availability.

#### Acceptance Criteria:

  1. Users should be able to toggle their online status on and off.
  2. When online status is turned off, other users shouldn't see that they're active.

##### User Story: As a user, I want to hide my online status.

 - **Acceptance Test:**
   - **Given:** The user is on the privacy settings page.
   - **When:** They toggle off their online status.
   - **Then:** Other users should not see them as "online."
