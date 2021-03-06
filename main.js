var titles = ["About Me", "Previous work"];
var contents = [
    "About me stuff here",
    "previous work goes here with images or smth",
];
var arrow = document.getElementById("arrow");
var box1 = document.getElementById("num1-box");
var box2 = document.getElementById("num2-box");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
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

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "<sender’s email address>",
        Password: "<email password>",
        To: "<recipient’s email address>",
        From: "<sender’s email address>",
        Subject: "<email subject>",
        Body: "<email body>",
    }).then(function (message) {
        alert("mail sent successfully");
    });
}

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

            buttons[highlightButton].style.border =
                "2px solid rgba(0, 0, 0, 0.25)";
            nums[highlightButton].style.color = "#969696";
            buttons[highlightButton].style.background = "transparent";
            buttons[x].style.background =
                "linear-gradient(227.67deg, #c24df2 -28.67%, #4848f0 161.15%)";
            nums[x].style.color = "white";
            buttons[x].style.border = "0";

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

        setTimeout(() => {
            box.style.transition = "all 2s";
            box.style.transform = "rotate(90deg)";
            box.style.filter = "brightness(50%)";
        }, 500);

        setTimeout(function () {
            box.style.marginRight = "-500%";
            box.style.marginBottom = "-200%";
            box.style.marginLeft = "500%";
        }, 600);

        var newBox = box.cloneNode(true);
        newBox.style.background =
            "linear-gradient(122.06deg, #4848F0 5.23%, rgba(168, 73, 242, 0.97) 101.96%, white)";

        if (device == "mobile") {
            newBox.style.margin = "87px -10px -37px 10px";
        } else {
            newBox.style.margin = "37px -48px -37px 48px";
        }

        newBox.style.opacity = "0";
        newBox.style.transition = "all .3s";

        setTimeout(() => {
            newBox.style.opacity = "1";
        }, 100);

        newBox.style.zIndex = "1";
        box.style.zIndex = "90";
        document.body.appendChild(newBox);

        setTimeout(function () {
            var pageNum = document.getElementById("red-page-number");
            var pageTitle = document.getElementById("page-title");
            var pageContent = document.getElementById("page-content");

            pageNum.innerText = "0" + (x + 1).toString();
            pageTitle.innerText = titles[x];

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
        }, 500);

        setTimeout(() => {
            newBox.style.background =
                "linear-gradient(122.06deg, #4848F0 5.23%, rgba(168, 73, 242, 0.97) 101.96%)";
        }, 500);

        setTimeout(function () {
            newBox.style.zIndex = "11";
            newBox.style.transition = "all 1s";
            box.remove();
            box = newBox;

            box.onmousedown = function (event) {
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
        }, 1200);

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
        }, 1200);
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
        num1Box.style.display = "none";
        num2Box.style.display = "none";
        num1.style.display = "none";
        num2.style.display = "none";
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
        num1Box.style.display = "block";
        num2Box.style.display = "block";
        num1.style.display = "block";
        num2.style.display = "block";
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
    if (window.innerWidth > 1164) {
        resizeWindow("desktop");
    } else {
        resizeWindow("mobile");
    }
};

function spawnShadow(type) {
    if (type == "disc") {
        var shadow = document.createElement("div");
        var popup = document.getElementById("popup");
        var popupTitle = document.getElementById("popup-title");
        var popupContent = document.getElementById("popup-content");
        shadow.style = `position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: rgba(0,0,0,0); transition: all .3s; z-index: 9999;`;
        document.body.appendChild(shadow);

        popup.style.display = "block";
        popupTitle.style.display = "block";
        popupContent.style.display = "block";

        if (window.innerWidth > 1164) {
            popup.style.marginLeft = "30%";
            popup.style.marginRight = "30%";
        }

        // set text
        popupTitle.innerText = "discord:";
        popupContent.innerText = "ItzBlake#1470";

        setTimeout(() => {
            shadow.style.backgroundColor = "rgba(0,0,0,0.85)";
            popup.style.opacity = "1";
            popup.style.height = "347px";
        }, 100);

        setTimeout(() => {
            // add text
            popupTitle.style.opacity = "1";
            popupContent.style.opacity = "1";
        }, 300);

        shadow.onclick = function () {
            shadow.style.opacity = "0";

            setTimeout(() => {
                shadow.remove();
            }, 300);
            popup.style.top = "unset";
            popup.style.bottom = "calc(50% - 347px / 2 + 0.5px)";
            popupTitle.style.opacity = "0";
            popupContent.style.opacity = "0";

            setTimeout(() => {
                popup.style.height = "0";
            }, 100);

            setTimeout(() => {
                popup.style.bottom = "unset";
                popup.style.top = "calc(50% - 347px / 2 + 0.5px)";
                popup.style.display = "none";
                popupTitle.style.display = "none";
                popupContent.style.display = "none";
            }, 400);
        };
    } else {
        var shadow = document.createElement("div");
        var popup = document.getElementById("popup");
        var popupTitle = document.getElementById("popup-title");
        var popupContent = document.getElementById("popup-content");
        shadow.style = `position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: rgba(0,0,0,0); transition: all .3s; z-index: 9999;`;
        document.body.appendChild(shadow);

        popup.style.display = "block";
        popupTitle.style.display = "block";
        popupContent.style.display = "block";

        if (window.innerWidth > 1163) {
            popup.style.marginLeft = "30%";
            popup.style.marginRight = "30%";
        }

        // set text
        popupTitle.innerText = "email:";
        popupContent.innerText = "blake.contact.medias@gmail.com";

        setTimeout(() => {
            shadow.style.backgroundColor = "rgba(0,0,0,0.85)";
            popup.style.opacity = "1";
            popup.style.height = "347px";
        }, 100);

        setTimeout(() => {
            // add text
            popupTitle.style.opacity = "1";
            popupContent.style.opacity = "1";
        }, 300);

        shadow.onclick = function () {
            shadow.style.opacity = "0";

            setTimeout(() => {
                shadow.remove();
            }, 300);

            popup.style.top = "unset";
            popup.style.bottom = "calc(50% - 347px / 2 + 0.5px)";
            popupTitle.style.opacity = "0";
            popupContent.style.opacity = "0";

            setTimeout(() => {
                popup.style.height = "0";
            }, 100);

            setTimeout(() => {
                popup.style.bottom = "unset";
                popup.style.top = "calc(50% - 347px / 2 + 0.5px)";
                popup.style.display = "none";
                popupTitle.style.display = "none";
                popupContent.style.display = "none";
            }, 400);
        };
    }
}

discord.onclick = function () {
    spawnShadow("disc");
};

mail.onclick = function () {
    spawnShadow();
};

num1.onclick = function () {
    nextSlide(0);
};

num2.onclick = function () {
    nextSlide(1);
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
    var dragX = event.clientX;
    var dragY = event.clientY;
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
        "border-radius: 50%; height: 0; width: 0; position: absolute; background: transparent; border: 4px solid rgba(0,0,0,.25);";
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
