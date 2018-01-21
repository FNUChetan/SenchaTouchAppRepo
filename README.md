# SenchaTouchAppRepo
About
-----

Hello Everyone!!

My name is FNU Chetan. I am working as a Sencha Developer over the last 4 years. I found this framework as one of the most organized framework.
As a tribute of my love to this framework, this is an inititaive to help people learn with best of the ease.

I am going to describe you the concepts and steps involved to create the project from scratch. I will try to adhere to all the best practices!!

To make your learning easy, you can go to the commits to find following things:
1. To see the code changes done that commit.
2. The purpose of those changes. [README.md in every commit for this.]
3. The concepts used while making those changes. [README.md in every commit for this.]
4. The known issues. [README.md in every commit for this.]

Let's set up the system environment first:
---------------------------------------------
NOTE: I am doing it in windows/PC. There won't be much difference in doing it on any other platform.
1. Download Sencha cmd. The url of downloads keeps changing as the versions gets updated. I will provide you the generic url where you can go and download the latest version:
  https://www.sencha.com/products/sencha-cmd/.
2. Install the Sencha cmd. While installing check the option called as "Compass...".
3. Download Ruby. I have downloaded and kept it in C:\Ruby22. You may need to add the Ruby in the system's environment variable.
4. Now download Sencha Touch SDK from https://www.sencha.com/products/touch/download/.

Creating a Sencha Touch project from scratch:
------------------------
Lets keep things in a convinient dir structure:

<b>SenchaWorkSpace</b><br/>
  --- <b>SenchaTouchSDK</b> (Folder containing the Sencha Touch SDK)<br/>
  --- You should expect a folder named as <b>"STouchApp"</b> automatically created by the Sencha cmd after you follow the next steps.

<b>Following steps will help you in creating the app:</b>
1. Open cmd, navigate to SenchaWorkSpace dir.
2. $ <b>sencha -sdk ./SenchaTouchSDK generate app STouchApp .</b>
3. Start the server: $ <b>sencha web start</b>
4. Launch default URL to test whether the was created sucessfully: http://localhost:1841/

