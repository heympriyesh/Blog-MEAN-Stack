# MEAN STACK BLOG APP

### Feature

1. Signin ,Singup,ForgotPassword
2. User can Read all the blogs
3. User can write the blog only when he/she is logged in
4. User can save his blog as draft and later he/she can edit or publish his drafts.
5. User who created the blog can only update delete the blog.
6. User can update his details like password,profie image,name,email.
7. Website is responsive

## How to install

1. Clone the project.
2. Go to client folder and do npm i
3. Go to server folder and do nmp i
4. Go to server->config folder and make a new file name config.env
5. Copy the below config.env file and paste

```
MONGO_URL:'your mongo atlas url'
JWT_SECRET="your secret key"
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30

RESET_PASSWORD_URL=http://localhost:4200/auth/resetPassword
PROJECT_URL=http://localhost:4200/

SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_EMAIL=''
SMTP_PASSWORD=''
FROM_EMAIL=noreply@priyeshtesing.com
FROM_NAME=Priyesh Pandey

```

### SCREENSHOTS

# Home

![image](https://user-images.githubusercontent.com/65906348/150398062-0be13052-8cd2-4de4-941d-32e628a768a0.png)

# Read Blogs

![screencapture-localhost-4200-read-2022-01-21-00_04_30](https://user-images.githubusercontent.com/65906348/150400713-208dbe13-f78b-4376-934d-a479b704d300.png)

# Write Blog

![screencapture-localhost-4200-write-2022-01-20-23_55_36](https://user-images.githubusercontent.com/65906348/150399069-cb7ffda7-fd02-4690-bb86-76cb6bd5f590.png)

# Read Single Blog

![screencapture-localhost-4200-read-61e9aa8270054a251c1d6f19-2022-01-21-00_01_44](https://user-images.githubusercontent.com/65906348/150400180-a84ea39f-b17f-4299-a99a-1fea2cd6cde1.png)

# My Profile

![image](https://user-images.githubusercontent.com/65906348/150400821-453984b4-43a6-4ddb-8b7c-52544679c75e.png)

# User Blogs

![image](https://user-images.githubusercontent.com/65906348/150400881-1732596e-effa-4f99-be6b-ae3c01df9bef.png)

# User Draft

![image](https://user-images.githubusercontent.com/65906348/150401282-7a3fd58c-1f72-40f7-87e5-14234315e4af.png)

# Signin

![image](https://user-images.githubusercontent.com/65906348/150398381-f306c575-8c75-411f-b1e4-9505dc20b8cd.png)

# Singup

![image](https://user-images.githubusercontent.com/65906348/150398457-126ef41f-0177-4a54-a094-495669292307.png)

# Reset Password Email

![image](https://user-images.githubusercontent.com/65906348/150398602-d2eb2a8b-6698-42e5-a379-b8be506ab0d6.png)

# Reset Password Page

![image](https://user-images.githubusercontent.com/65906348/150398669-b0d2501b-9448-4fb9-a961-ea155acc4bd8.png)
