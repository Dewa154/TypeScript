var Dewanand = { dbId: 22, email: "d@dewa.com", // compulsory value data of interface parameter   // replaced User to Admin
    userId: 2211,
    role: "admin",
    githubToken: "github",
    startTrail: function () {
        return "Trail started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
Dewanand.email = "Dewa@dewa.com";
// Dewanand.dbId = 33       // not allowed because dbId is readonly.
