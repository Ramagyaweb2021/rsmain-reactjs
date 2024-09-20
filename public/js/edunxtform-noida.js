function validateit2() {
    const e = document.querySelectorAll(".mandatory");
    let a = true;
    e.forEach((function(e) {
        if ("" === e.value.trim()) {
            a = false;
            var t = document.createElement("label");
            t.id = e.id + "-label", t.className = "error", t.textContent = "Kindly insert " + e.getAttribute("data-label"), e.parentNode.insertBefore(t, e.nextSibling)
        } else {
            var n = document.getElementById(e.id + "-label");
            n && n.parentNode.removeChild(n);
        }
    }));
    if (a) {
        if (0 == grecaptcha.getResponse()) return alert("Kindly tick the checkbox of the captcha to confirm this application form."), !1;
        submitData();
    } else {
        alert("Please fill in all mandatory fields.");
    }
}

function submitData() {
    $.ajax({
        type: "post",
        url: "https://ramagyanoida.edunexttechnologies.com/Exclusion/CreateStudentEnquiry",
        data: $("#myform3").serialize(),
        success: function(e) {
            if (e === "Successfully") {
                $(".formfields2").hide();
                window.location.href = "thank-you.html";
            } else {
                $(".formfields2").hide();
                $(".British-Council").hide();
                $("#msg").show();
                $("#msgpara2").text("Something went wrong");
            }
        }
    });
}

function getclass() {
    var e = $("#academicyearid").val();
    if (e > 0) {
        var a = "";
        $.ajax({
            url: "https://ramagyanoida.edunexttechnologies.com/mobapps/EnquiryFormServices?academicyearid=" + e,
            context: document.body,
            success: function(e) {
                $("#classid").empty();
                var t = $.parseJSON(e);
                a += "<option value='-1'>Select Class Applying For</option>", $.each(t.enquiryClasses_array, (function(e, t) {
                    a += "<option value='" + t.id + "'>" + t.name + "</option>";
                })), $("#classid").append(a), $("#classidd").parent().removeClass("focused"), $("#classid").siblings("label").css("opacity", 1);
            }
        });
    }
}

$(document).on("keypress", ".inputTextBox", (function(e) {
    var a = new RegExp("^[a-zA-Z ]+$"),
        t = String.fromCharCode(e.charCode ? e.charCode : e.which);
    if (!a.test(t)) return e.preventDefault(), !1;
}));

$(document).ready((function() {
    $(".numbervalue").keypress((function(e) {
        var a = [],
            t = e.which;
        for (i = 48; i < 58; i++) a.push(i);
        a.indexOf(t) >= 0 || e.preventDefault();
    }));
}));

$(document).ready((function() {
    var e = "";
    $.ajax({
        url: "https://ramagyanoida.edunexttechnologies.com/mobapps/EnquiryFormServices",
        context: document.body,
        success: function(a) {
            var t = $.parseJSON(a);
            e += "<option value='-1'>Academic Year *</option>", $.each(t.enquiryAcademicyear_array, (function(a, t) {
                e += "<option value='" + t.id + "'>" + t.name + "</option>";
            })), $("#academicyearid").append(e), $("#academicyearid").parent().addClass("focused");
        }
    });
}));
