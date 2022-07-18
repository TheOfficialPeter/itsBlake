var titles = ["About Me", "Contact", "Contact", "Credits"];
var contents = [
    "About me stuff here",
    "previous work goes here with images or smth",
    "",
    "This website is an example of my work. It was made using HTML, CSS and JS.",
];
var arrow = document.getElementById("arrow");
var box1 = document.getElementById("num1-box");
var box2 = document.getElementById("num2-box");
var discord = document.getElementById("discord");
var mail = document.getElementById("mail");
var box = document.getElementById("box");
var dragStart = 0;
var x = 0;
var dragThreshX = 300;
var dragThreshY = 200;
var highlightButton = 0;
var debounce = false;
var device = "";

function nextSlide(num) {
    if (debounce === false) {
        debounce = true;
        var button1 = document.getElementById("num1-box");
        var button2 = document.getElementById("num2-box");
        var num1 = document.getElementById("num1");
        var num2 = document.getElementById("num2");

        var buttons = [button1, button2];
        var nums = [num1, num2];

        if (num != -1) {
            x = num;

            buttons[x].style.background =
                "linear-gradient(227.67deg, #c24df2 -28.67%, #4848f0 161.15%)";
            nums[x].style.color = "white";
            buttons[x].style.border = "0";
            buttons[highlightButton].style.border =
                "2px solid rgba(0, 0, 0, 0.25)";
            nums[highlightButton].style.color = "#969696";
            buttons[highlightButton].style.background = "transparent";

            highlightButton = num;
        } else {
            x += 1;

            if (x == 2) {
                buttons[x - 1].style.background = "transparent";
                buttons[x - 1].style.border = "2px solid rgba(0, 0, 0, 0.25)";
                nums[x - 1].style.color = "#969696";
                x = 0;
                buttons[x].style.background =
                    "linear-gradient(227.67deg, #c24df2 -28.67%, #4848f0 161.15%)";
                buttons[x].style.border = "0";
                nums[x].style.color = "white";
                highlightButton = x;
            } else {
                buttons[x - 1].style.background = "transparent";
                buttons[x - 1].style.border = "2px solid rgba(0, 0, 0, 0.25)";
                nums[x - 1].style.color = "#969696";
                buttons[x].style.background =
                    "linear-gradient(227.67deg, #c24df2 -28.67%, #4848f0 161.15%)";
                buttons[x].style.border = "0";
                nums[x].style.color = "white";
                highlightButton = x;
            }
        }

        var pageNum = document.getElementById("red-page-number");
        var pageTitle = document.getElementById("page-title");
        var pageContent = document.getElementById("page-content");
        var pageBar = document.getElementById("page-number-block");

        arrow.style.opacity = "0";
        setTimeout(function () {
            pageNum.style.opacity = "0";
            pageTitle.style.opacity = "0";
            pageContent.style.opacity = "0";
            pageBar.style.opacity = "0";
        }, 300);

        setTimeout(function () {
            pageNum.remove();
            pageTitle.remove();
            pageContent.remove();
            pageBar.remove();
        }, 500);

        box = box || document.getElementById("box");

        setTimeout(function () {
            box.style.marginRight = "-200%";
            box.style.marginLeft = "200%";
        }, 600);

        var newBox = box.cloneNode(true);
        newBox.style.background =
            "linear-gradient(0deg, #4848F0 5.23%, rgba(168, 73, 242, 0.97) 101.96%)";

        if (device == "mobile") {
            newBox.style.margin = "87px -10px -37px 10px";
        } else {
            newBox.style.margin = "37px -48px -37px 48px";
        }

        newBox.style.transition = "all .3s";

        newBox.style.zIndex = "1";
        box.style.zIndex = "90";
        document.body.appendChild(newBox);

        setTimeout(function () {
            var pageNum = document.getElementById("red-page-number");
            var pageTitle = document.getElementById("page-title");
            var pageContent = document.getElementById("page-content");

            pageNum.style.right = "20";
            pageNum.innerText = "0" + (x + 1).toString();
            pageTitle.innerText = titles[x];

            if (x == 1) {
                pageContent.innerText = "";

                // add contact info
                var email = document.createElement("div");
                var message = document.createElement("div");
                var submit = document.createElement("div");
                var submitText = document.createElement("div");
                var emailText = document.createElement("div");
                var messageText = document.createElement("div");

                email.id = "emailbox";
                message.id = "messagebox";
                submit.id = "submitbox";

                email.style = `position: absolute;
								width: 327px;
								box-shadow: inset 0px 4px 20px rgba(0, 0, 200, 0.25);
								height: 63px;
								left: 0;
                                max-width: 400px;
								top: 20px;
								z-index: 999;
								background: white;`;
                message.style = `position: absolute;
								width: 327px;
								height: 155px;
								left: 0;
                                max-width: 400px;
								box-shadow: inset 0px 4px 20px rgba(0, 0, 200, 0.25);
								top: 100px;
								z-index: 999;
								background: white;`;
                submit.style = `position: absolute;
								width: 184px;
								height: 70px;
								left: 65px;
								top: 300px;
								z-index: 999;
								cursor: pointer;
								transition: all .2s;
                                outline: 3px solid #dfdfdf;
								background: white;`;
                submitText.style = `position: absolute;
									left: 0;
									right: 0;
									font-family: Mont;
									font-weight: 100;
									text-align: center;
									top: calc(50% - 30px/2);
                                    color: black;
									font-size: 25px;`;
                emailText.style = `position: absolute;
									right: 0;
									top: 10px;
									font-family: Open;
									transition: all .2s;
									font-size: 20px;
                                    color: black;
									left: 10px;`;
                messageText.style = `position: absolute;
									right: 0;
                                    color: black;
									top: 10px;
									transition: all .2s;
									font-family: Open;
									font-size: 20px;
									left: 10px;`;

                if (device == "mobile") {
                    arrow.style.bottom = "";
                    arrow.style.top = "100";

                    email.style = `position: absolute;
								width: auto;
								box-shadow: inset 0px 4px 20px rgba(0, 0, 200, 0.25);
								height: 63px;
								left: 0;
                                right: 0;
                                max-width: 400px;
								top: 20px;
								z-index: 999;
								background: white;`;
                    message.style = `position: absolute;
								width: auto;
								height: 155px;
								left: 0;
                                right: 0;
                                max-width: 400px;
								box-shadow: inset 0px 4px 20px rgba(0, 0, 200, 0.25);
								top: 100px;
								z-index: 999;
								background: white;`;
                    submit.style = `position: absolute;
								width: 184px;
								height: 70px;
								left: 10;
								top: 275px;
								z-index: 999;
								cursor: pointer;
								transition: all .2s;
                                outline: 3px solid #dfdfdf;
								background: white;`;
                }

                submitText.innerText = "Submit";
                emailText.innerText = "Email";
                messageText.innerText = "Message";

                pageContent.appendChild(email);
                pageContent.appendChild(message);
                pageContent.appendChild(submit);
                submit.appendChild(submitText);
                email.appendChild(emailText);
                message.appendChild(messageText);
            } else {
                arrow.style.top = "";
                arrow.style.bottom = "100px";

                pageContent.innerText = contents[x];

                try {
                    document.getElementById("emailbox").remove();
                    document.getElementById("messagebox").remove();
                    document.getElementById("submitbox").remove();
                } catch {
                    return;
                }
            }
        }, 500);

        setTimeout(() => {
            newBox.style.background =
                "linear-gradient(122.06deg, #4848F0 5.23%, rgba(168, 73, 242, 0.97) 101.96%)";
        }, 500);

        setTimeout(function () {
            newBox.style.background =
                "linear-gradient(122.06deg, #4848F0 5.23%, rgba(168, 73, 242, 0.97) 101.96%)";
            newBox.style.zIndex = "11";
            newBox.style.transition = "all 1s";
            box.remove();
            box = newBox;

            box.onmousedown = function () {
                dragStart = event.clientX;
                document.onmousemove = function (event2) {
                    if (event2.clientX - dragX >= dragThreshX && device == "") {
                        nextSlide(-1);
                    } else if (
                        event2.clientY - dragY >= dragThreshY &&
                        device == "mobile"
                    ) {
                        nextSlide(-1);
                    }
                };
            };

            box.onmouseup = function () {
                document.onmousemove = null;
            };
        }, 1000);

        setTimeout(function () {
            if (device == "mobile") {
                newBox.style.margin = "0 0 0 0";
            } else {
                newBox.style.margin = "0";
            }
        }, 100);

        setTimeout(function () {
            arrow.style.opacity = "1";
            arrow.style.zIndex = "99";
            debounce = false;
        }, 1000);
    }
}

function resizeWindow(platform) {
    if (platform == "mobile") {
        device = "mobile";
        var navbar = document.getElementById("nav");
        var navTitle = document.getElementById("nav-title");
        var discord =
            document.getElementById("newDiscord") ||
            document.getElementById("discord");
        var email =
            document.getElementById("newMail") ||
            document.getElementById("mail");
        var box = document.getElementById("box");
        var boxShadow = document.getElementById("box-shadow");
        var pageContent = document.getElementById("page-content");
        var pageTitle = document.getElementById("page-title");
        var num1Box = document.getElementById("num1-box");
        var num2Box = document.getElementById("num2-box");
        var num1 = document.getElementById("num1");
        var num2 = document.getElementById("num2");
        var numBar = document.getElementById("page-number-block");

        pageContent.style.left = "10";
        pageContent.style.right = "10";
        pageTitle.style.left = "10";

        numBar.style.display = "none";
        num1Box.style.opacity = "0";
        num2Box.style.opacity = "0";
        num1.style.opacity = "0";
        num2.style.opacity = "0";

        navTitle.style.fontSize = "25px";
        navTitle.style.textAlign = "center";
        navTitle.style.left = "calc(50% - 150px/2)";

        navbar.style.width = "300px";
        navbar.style.left = "calc(50% - 300px/2)";

        discord.id = "newDiscord";
        discord.style = `position: absolute;
                            width: 28px;
                            height: 28px;
                            left: calc(50% - 28px/2 - 30px);
                            bottom: 27px;
                            transition: filter .3s;
                            opacity: 1;
                            z-index: 999;
                            cursor: pointer;`;

        email.id = "newMail";
        email.style = `position: absolute;
                            width: 28px;
                            height: 28px;
                            left: calc(50% - 28px/2 + 30px);
                            bottom: 27px;
                            transition: filter .3s;
                            opacity: 1;
                            z-index: 999;
                            cursor: pointer;`;

        pageContent.style.left = "calc(50% - 20px);";

        var smallNav = document.createElement("img");
        smallNav.src = "smallnav.svg";

        // same style as navbar
        var newNavbar = smallNav;
        if (newNavbar !== null) {
            newNavbar.style = ``;

            box.style.transition = "all 0s";
            box.style.marginTop = "0";
            box.style.left = "10px";
            box.style.right = "20px";
            boxShadow.style.transition = "all 0s";
            boxShadow.style.marginTop = "0";
            boxShadow.style.left = "20px";
            boxShadow.style.right = "10px";

            newNavbar.id = "newNav";
            newNavbar.style = `box-sizing: border-box;
                                position: absolute;
                                width: 140px;
                                left: calc(50% - 140px/2);
                                bottom: 12.5px;`;

            document.body.appendChild(newNavbar);
        }

        setTimeout(function () {
            box.style.transition = "all 1s";
        }, 1000);

        setTimeout(function () {
            boxShadow.style.transition = "all .5s";
        }, 500);
    } else {
        device = "";
        var pageContent = document.getElementById("page-content");
        var pageTitle = document.getElementById("page-title");
        var navbar = document.getElementById("nav");
        var navTitle = document.getElementById("nav-title");
        var discord =
            document.getElementById("discord") ||
            document.getElementById("newDiscord");
        var email =
            document.getElementById("newMail") ||
            document.getElementById("mail");
        var box = document.getElementById("box");
        var boxShadow = document.getElementById("box-shadow");
        var arrow =
            document.getElementById("newArrow") ||
            document.getElementById("arrow");
        var num1Box = document.getElementById("num1-box");
        var num2Box = document.getElementById("num2-box");
        var num1 = document.getElementById("num1");
        var num2 = document.getElementById("num2");
        var numBar = document.getElementById("page-number-block");

        pageContent.style.left = "87px";
        pageContent.style.right = "60px";
        pageTitle.style.left = "80px";

        numBar.style.display = "block";
        num1Box.style.opacity = "1";
        num2Box.style.opacity = "1";
        num1.style.opacity = "1";
        num2.style.opacity = "1";

        var newNavbar = document.getElementById("newNav");

        if (newNavbar !== null) {
            newNavbar.remove();
        }

        discord.style = `position: absolute;
								width: 28px;
								height: 28px;
								left: calc(50% - 28px/2 + 123px);
								top: 55px;
								transition: filter .3s;
								opacity: 1;
								cursor: pointer;`;
        email.style = `position: absolute;
							width: 28px;
							height: 28px;
							left: calc(50% - 28px/2 + 163px);
							top: 55px;
							transition: filter .3s;
							cursor: pointer;`;

        navTitle.style.fontSize = "45px";
        navTitle.style.marginTop = "";
        navTitle.style.marginLeft = "";
        navTitle.style.left = "calc(50% - 221px/2 - 61.5px)";

        navbar.style.width = "397px";
        navbar.style.left = "calc(50% - 397px/2)";

        box.style.marginTop = "";
        box.style.left = "234px";
        box.style.right = "171px";
        box.style.transition = "all 1s";
        boxShadow.style.marginTop = "";
        boxShadow.style.transition = "all .5";
        boxShadow.style.left = "282px";
        boxShadow.style.right = "123px";

        arrow.style = `position: absolute;
							width: 105px;
							height: 105px;
							right: 119px;
							bottom: 100px;
							z-index: 99;
							cursor: pointer;
							transition: all .5s;`;
    }
}

if (window.innerWidth <= 840) {
    resizeWindow("mobile");
}

window.onresize = function () {
    if (window.innerWidth > 840) {
        resizeWindow("desktop");
    } else {
        resizeWindow("mobile");
    }
};

function spawnShadow(bool) {
    if (bool) {
        var shadow = document.createElement("div");
        shadow.style = `position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: rgba(0,0,0,0); transition: all .2s; z-index: 9999;`;
        document.body.appendChild(shadow);

        setTimeout(() => {
            shadow.style.backgroundColor = "rgba(0,0,0,0.8)";
        }, 100);

        shadow.onclick = function () {
            shadow.remove();
        };
    }
}

discord.onclick = function () {
    spawnShadow(true);
};

mail.onclick = function () {
    spawnShadow(true);
};

box1.onclick = function () {
    nextSlide(0);
};

box2.onclick = function () {
    nextSlide(1);
};

arrow.onclick = function () {
    nextSlide(-1);
};

box.onmousedown = function (event) {
    dragX = event.clientX;
    dragY = event.clientY;
    document.onmousemove = function (event2) {
        if (event2.clientX - dragX >= dragThreshX && device == "") {
            nextSlide(-1);
        } else if (
            event2.clientY - dragY >= dragThreshY &&
            device == "mobile"
        ) {
            nextSlide(-1);
        }
    };
};

box.onmouseup = function () {
    document.onmousemove = null;
};

window.onclick = function (event3) {
    var circle = document.createElement("div");
    circle.id = "circle";
    circle.style =
        "border-radius: 50%; height: 0; width: 0; position: absolute; background: transparent; border: 4px solid black;";
    circle.style.left = (event3.clientX - 5).toString() + "px";
    circle.style.top = (event3.clientY - 5).toString() + "px";
    circle.style.zIndex = "9999";
    circle.style.transition = "all .3s";

    setTimeout(function () {
        circle.style.height = "30px";
        circle.style.width = "30px";
        circle.style.marginLeft = "-15px";
        circle.style.marginTop = "-15px";
    }, 50);

    setTimeout(function () {
        circle.style.opacity = "0";
    }, 100);

    setTimeout(function () {
        circle.remove();
    }, 300);

    document.body.appendChild(circle);
};
