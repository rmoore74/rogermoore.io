angular.module('ProjectCtrl', []).controller('ProjectController', function($scope) {

    $scope.projectList = [
        {
            lightId: 'project-9',
            title: 'json-prettifier',
            description: '\'json-prettifier\' is a recent project that I have been working on. It is a basic, barebones JSONLint clone. Basically, I love JSONLint and I remember a time when it went down for a while and it was almost as though it was the end of the world, so I decided it would be a  fun project to take up myself. I have recently fallen in love with the MEAN stack (MongoDB, ExpressJS, AngularJS, and NodeJS), thus this project is based off of that stack (as is this very website). The source code for this can be found on my GitHub.',
            pictures: [
                {
                    thumbUrl: '/img/projects/json-prettifier/main.png',
                    imgUrl: '/img/projects/json-prettifier/main.png'
                },
                {
                    thumbUrl: '/img/projects/json-prettifier/invalid.png',
                    imgUrl: '/img/projects/json-prettifier/invalid.png',
                },
                {
                    thumbUrl: '/img/projects/json-prettifier/valid.png',
                    imgUrl: '/img/projects/json-prettifier/valid.png'
                }
            ]
        },
        {
            lightId: 'project-8',
            title: 'Dropshipping DB Manager',
            description: 'This project involved creating a database item manager for a dropshipping venture that I was working on in the past. The main technologies used here for this project are PHP and SQL. Mainly because these work on the server that we were using to host the website was based on the traditional LAMP stack. The main functionality of the dropshipping item database manager is searching, adding, editing, and removing products etc.',
            pictures: [
                {
                    thumbUrl: '/img/projects/dropship/thumb/login-150x150.png',
                    imgUrl: '/img/projects/dropship/login.png'
                },
                {
                    thumbUrl: '/img/projects/dropship/thumb/dashboard-150x150.png',
                    imgUrl: '/img/projects/dropship/dashboard.png'
                },
                {
                    thumbUrl: '/img/projects/dropship/thumb/search_in_action-150x150.png',
                    imgUrl: '/img/projects/dropship/search_in_action.png'
                },
                {
                    thumbUrl: '/img/projects/dropship/thumb/product_page-150x150.png',
                    imgUrl: '/img/projects/dropship/product_page.png'
                },
                {
                    thumbUrl: '/img/projects/dropship/thumb/add_product-150x150.png',
                    imgUrl: '/img/projects/dropship/add_product.png'
                },
                {
                    thumbUrl: '/img/projects/dropship/thumb/edit_product-150x150.png',
                    imgUrl: '/img/projects/dropship/edit_product.png'
                }
            ]
        },
        {
            lightId: 'project-7',
            title: 'Magic Link Cloaker',
            description: 'This was a fun little project that I worked on. Basically, the idea was to create a URL shortener to make ugly affiliate links (e.g., internet marketing) more bareable to look at. So in principle, it was similar to something like TinyURL. However, the idea here was that you could install the script on your website and then the links would be cloaked from your URL. So, you could mask an affiliate link and just give the user a link from your site which would then redirect to the affiliated product. The source for this can be found on my GitHub.',
            pictures: [
                {
                    thumbUrl: '/img/projects/mlc/thumb/mlc_login-150x150.png',
                    imgUrl: '/img/projects/mlc/mlc_login.png'
                },
                {
                    thumbUrl: '/img/projects/mlc/thumb/mlc-300x230.png',
                    imgUrl: '/img/projects/mlc/mlc.png'
                },
                {
                    thumbUrl: '/img/projects/mlc/thumb/mlc2-150x150.png',
                    imgUrl: '/img/projects/mlc/mlc2.png'
                },
                {
                    thumbUrl: '/img/projects/mlc/thumb/mlc3-150x150.png',
                    imgUrl: '/img/projects/mlc/mlc3.png'
                },
                {
                    thumbUrl: '/img/projects/mlc/thumb/mlc4-150x150.png',
                    imgUrl: '/img/projects/mlc/mlc4.png'
                },
                {
                    thumbUrl: '/img/projects/mlc/thumb/mlc5-150x150.png',
                    imgUrl: '/img/projects/mlc/mlc5.png'
                }
            ]
        },
        {
            lightId: 'project-6',
            title: 'Race Data Application',
            description: 'This is a project that I created for my programming module at King’s College. This was part of my second coursework in the module. This application pulls data from an online database, using a jar file that our tutor provided us with, which allows you to choose athletes and add an athlete friend to the main list. You can add or remove these friends. When you double click on a friend it will take you to their race results. You can also tweet race results to your Twitter account and you can view a graphical representation of the results, via charts. To create this project I used Java, the Java Swing library, the Twitter4j library, and the JFreeChart library. This was a fun and challenging piece of coursework.',
            pictures: [
                {
                    thumbUrl: '/img/projects/race_app/thumb/auth-150x150.png',
                    imgUrl: '/img/projects/race_app/auth.png'
                },
                {
                    thumbUrl: '/img/projects/race_app/thumb/auth2-150x150.png',
                    imgUrl: '/img/projects/race_app/auth2.png'
                },
                {
                    thumbUrl: '/img/projects/race_app/thumb/auth3-150x124.png',
                    imgUrl: '/img/projects/race_app/auth3.png'
                },
                {
                    thumbUrl: '/img/projects/race_app/thumb/main_list-150x150.png',
                    imgUrl: '/img/projects/race_app/main_list.png'
                },
                {
                    thumbUrl: '/img/projects/race_app/thumb/search-150x150.png',
                    imgUrl: '/img/projects/race_app/search.png'
                },
                {
                    thumbUrl: '/img/projects/race_app/thumb/results-150x150.png',
                    imgUrl: '/img/projects/race_app/results.png'
                },
                {
                    thumbUrl: '/img/projects/race_app/thumb/charts-150x150.png',
                    imgUrl: '/img/projects/race_app/charts.png'
                }
            ]
        },
        {
            lightId: 'project-5',
            title: 'Android MD5 Checksum App',
            description: 'Okay, so visually this application doessn’t look too great at the moment. This is because this app is currently a work in progress. To expand my skills in Android development, I set myself the task of creating an application that allows the user to choose a file on their phone and generate its unique MD5 hash. I also provide the option to convert plain text strings into MD5 as well. When the MD5 is generated the hash is automatically copied to clipboard and an Android toast is displayed to alert the user of this. I just have to get file checksum generation working and then sort out the user interface until I have completed this project.',
            pictures: [
                {
                    thumbUrl: '/img/projects/md5/thumb/main_app-150x150.png',
                    imgUrl: '/img/projects/md5/main_app.png'
                },
                {
                    thumbUrl: '/img/projects/md5/thumb/file_chooser-150x150.png',
                    imgUrl: '/img/projects/md5/file_chooser.png'
                }
            ]
        },
        {
            lightId: 'project-4',
            title: 'First Person Messabout',
            description: 'This is a project I created whilst working on ‘Unit 22 – Developing Computer Games’, whilst I was at college. For this project, the rest of my class were using Blender to design and create their games, but I wanted to challenge myself and I asked my tutor if I was able to create the game in something other than Blender. I ended up using C++ with a game development library. The library that I used was DarkGDK. I had no experience with DarkGDK and limited experience with C++, so I had to get comfortable with C++ again as well as learning a new library. As I was developing the game from scratch using hard code, I made use of models that I had found off of the internet (this was allowed as long I referenced all external sources, which I did). Within my limited timescale I was able to create a game where you were able to roam the map freely. The game included physics, allowing the user to jump up and down and fall off of objects etc. Collision detection was also working, so the user couldn’t just walk through walls. The user moved around using W, A, S, and D keys, with spacebar allocated for jumping.',
            pictures: [
                {
                    thumbUrl: '/img/projects/fps/thumb/Gameplay-150x150.png',
                    imgUrl: '/img/projects/fps/Gameplay.png'
                },
                {
                    thumbUrl: '/img/projects/fps/thumb/jump1-150x150.png',
                    imgUrl: '/img/projects/fps/jump1.png'
                },
                {
                    thumbUrl: '/img/projects/fps/thumb/jump2-150x150.png',
                    imgUrl: '/img/projects/fps/jump2.png'
                },
                {
                    thumbUrl: '/img/projects/fps/thumb/screen1-150x150.png',
                    imgUrl: '/img/projects/fps/screen1.png'
                },
                {
                    thumbUrl: '/img/projects/fps/thumb/screen2-150x150.png',
                    imgUrl: '/img/projects/fps/screen2.png'
                },
                {
                    thumbUrl: '/img/projects/fps/thumb/screen3-150x150.png',
                    imgUrl: '/img/projects/fps/screen3.png'
                },
                {
                    thumbUrl: '/img/projects/fps/thumb/screenshot-150x150.png',
                    imgUrl: '/img/projects/fps/screenshot.png'
                }
            ]
        },
        {
            lightId: 'project-3',
            title: 'X Ercise Booking Application',
            description: 'This was a project that I was assigned whilst I was at Bexhill College. For one of my college assignments I had to create a booking form application for a gym. This application would allow users to book equipment in the gym for a certain date at a certain time. Users were also able to view bookings that had already been made. Bookings were stored in an external database. I used VB.NET to create this application.',
            pictures: [
                {
                    thumbUrl: '/img/projects/xercise/thumb/booking-form-150x150.png',
                    imgUrl: '/img/projects/xercise/booking-form.png'
                },
                {
                    thumbUrl: '/img/projects/xercise/thumb/splash-screen-150x150.png',
                    imgUrl: '/img/projects/xercise/splash-screen.png'
                },
                {
                    thumbUrl: '/img/projects/xercise/thumb/viewing-form-150x150.png',
                    imgUrl: '/img/projects/xercise/viewing-form.png'
                }
            ]
        },
        {
            lightId: 'project-2',
            title: 'Enigma Machine',
            description: 'This is another project that I created in VB.NET. This was a project set to me by my tutor at Bexhill College. It was a really fun and exciting project and pushed me to my limits of skill, at the time. This is an application that simulates the famous Enigma machine which was used by German military to send encoded messages to each other. These transmissions were famously cracked by Alan Turing!',
            pictures: [
                {
                    thumbUrl: '/img/projects/enigma/thumb/enigma-150x150.png',
                    imgUrl: '/img/projects/enigma/enigma.png'
                }
            ]
        },
        {
            lightId: 'project-1',
            title: 'Veloci Games',
            description: 'This is a website that my friend and I designed and created for free to help out a freelance game designer. In the end, the game designer didn’t use the website that we created, but we were proud of what we had created. This website is rather dated and was created back in 2010 when we were quite young. The site included HTML, CSS, PHP (used for the Twitter feed), and jQuery.',
            pictures: [
                {
                    thumbUrl: '/img/projects/veloci/thumb/screenshot1-150x150.png',
                    imgUrl: '/img/projects/veloci/screenshot1.png'
                }
            ]
        }
    ];

});
