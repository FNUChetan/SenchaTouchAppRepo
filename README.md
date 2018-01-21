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
  --- You should expect a folder named as <b>"SenchaTouchAppRepo"</b> automatically created by the Sencha cmd after you follow the next steps.

<b>Following steps will help you in creating the app:</b>
1. Open cmd, navigate to SenchaWorkSpace dir.
2. $ <b>sencha -sdk ./SenchaTouchSDK generate app STouchApp SenchaTouchAppRepo</b>
3. Start the server: $ <b>sencha web start</b>
4. Launch default URL to test whether the was created sucessfully: http://localhost:1841/

After creating the project I created few new files and modified some files to build a basic skeliton/layout of the application ready.
At this point point of time I think it is important for you to take a look to those changes and understand them to get more excitement for rest of the learnings!

Those chnages can be viewed here: https://github.com/FNUChetan/SenchaTouchAppRepo/tree/ce33a5d327fd28f15a5b8e06546e4285f9b2f99b

<b>Files Modified:</b><br/>
1. <a href="https://github.com/FNUChetan/SenchaTouchAppRepo/blob/ce33a5d327fd28f15a5b8e06546e4285f9b2f99b/app.js">SenchaTouchAppRepo/app.js</a><br/>
	Change 1 --> Added the names of the views, which I am going to create. They load during the startup of the app as they will have the code for the UI part of the home page and related layouts.
	Change 2 --> Added a controller which I am going to create. I need this controller to load during the app launch. Anything which has to deal only with data or logic and nothing to do with the appearance of the app should reside in controllers.
	Change 3 --> Added this line in launch() function: Ext.Viewport.add(Ext.create('STouchApp.view.Main')); Due to this line it will serch for Main.js file under <AppHomeFolder>/app/view dir. And I am going to create the home screen of the app in Main.js.
2. <a href="https://github.com/FNUChetan/SenchaTouchAppRepo/blob/ce33a5d327fd28f15a5b8e06546e4285f9b2f99b/app/view/Main.js">SenchaTouchAppRepo/app/view/Main.js</a><br/>
	In this file which extended from Ext.Container, I have created two children. One to reserve the top 10% of the screen showing the header and the the rest of the 90% of the screen is given to the tab-view (Defined in <a href="https://github.com/FNUChetan/SenchaTouchAppRepo/blob/ce33a5d327fd28f15a5b8e06546e4285f9b2f99b/app/view/TabView.js">SenchaTouchAppRepo/app/view/TabView.js</a>) to have the tab panel.<br/>
<b>Files Created:</b><br/>
1. <a href="https://github.com/FNUChetan/SenchaTouchAppRepo/blob/ce33a5d327fd28f15a5b8e06546e4285f9b2f99b/app/view/TabView.js">SenchaTouchAppRepo/app/view/TabView.js</a><br/>
	This View is an extension of Ext.tab.Panel where I have created the tabs and more tabs by calling xtype of <a href="https://github.com/FNUChetan/SenchaTouchAppRepo/blob/ce33a5d327fd28f15a5b8e06546e4285f9b2f99b/app/view/MoreTabs.js">SenchaTouchAppRepo/app/view/MoreTabs.js</a>. The position of tab is kept at bottom. <a href="https://github.com/FNUChetan/SenchaTouchAppRepo/blob/ce33a5d327fd28f15a5b8e06546e4285f9b2f99b/app/store/Tabs.js">SenchaTouchAppRepo/app/store/Tabs.js</a> store is used to create the tabs from the dynamic data.<br/>
2. <a href="https://github.com/FNUChetan/SenchaTouchAppRepo/blob/ce33a5d327fd28f15a5b8e06546e4285f9b2f99b/app/view/MoreTabs.js">SenchaTouchAppRepo/app/view/MoreTabs.js</a><br/>
	This file or class is an extension of 'Ext.List' which is used to show the more tabs in the form of a list in the last tab of the tab-panel created above.<br/>
3. <a href="https://github.com/FNUChetan/SenchaTouchAppRepo/blob/ce33a5d327fd28f15a5b8e06546e4285f9b2f99b/app/store/Tabs.js">SenchaTouchAppRepo/app/store/Tabs.js</a><br/>
	A store to bring tabs data from the server. For now data seems to be static. Plan is to bring it from server side.<br/>
4. <a href="https://github.com/FNUChetan/SenchaTouchAppRepo/blob/ce33a5d327fd28f15a5b8e06546e4285f9b2f99b/app/model/Tab.js">SenchaTouchAppRepo/app/model/Tab.js</a><br/>
	A model to be used by the Tabs Store create above.<br/>
5. <a href="https://github.com/FNUChetan/SenchaTouchAppRepo/blob/ce33a5d327fd28f15a5b8e06546e4285f9b2f99b/app/controller/MainController.js">SenchaTouchAppRepo/app/controller/MainController.js</a><br/>
	Nothing much done here except the loading of store's and the model's JS files as the controller loads. Plan is to write all home screen related logics to be written here.


