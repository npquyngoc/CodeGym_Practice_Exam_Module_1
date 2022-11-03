"use strict";

import { Staff } from "./Staff.js";

const david = new Staff
(
    "David",
    "david@gmail.com"
);

david.setFullName("David Do");
david.setEmail("david.do@gmail.com");

const staffs =
[
    david,

    new Staff
    (
        "Nguyen Ngoc",
        "np.quyngoc@gmail.com"
    ),

    new Staff
    (
        "Ngo Minh Hieu",
        "hieu.pc@7onez.com"
    ),

    new Staff
    (
        "Manh Tuan",
        "manh.tuan@j2team.com"
    )
];

document.body.innerHTML = staffs
.join("")
.toString();