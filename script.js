document.getElementById("privateButton").addEventListener("click", function() {
    document.getElementById("privateContainer").classList.remove("hidden");
});
function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const responseMessage = document.getElementById("responseMessage");
    const messageContainer = document.getElementById("messageContainer");

    if (password === "18012003") {
        responseMessage.textContent = "Rey sai pls ra matladu ra na vala avadam ledu ra nv chapidi vintanu neku ma meda kopam ravadaniki reason ede ga amma ni amma ni pelavaledu ani naku nejam ga gurthu ra aa roju em matladeno neto argive chase ga ela mee ame ani adi na bday ki wish r call kuda ledu ane bada pade ra epudu ika badagene undi but em chadam aa year ipoendi but ee 2k25 lo manam happy ga undalli ra nv anate one month ki oka sare call chape parledu but anitilo unblock chay ra challu naku yavarini help adagali ani ledu anduke ela adugutha una because epatike vala dagara chinna chupu ipoyanu ra pls try to understand";
        responseMessage.style.color = "#4CAF50";
        messageContainer.style.display = "none";
    } else {
        responseMessage.textContent = "Contact to SAGAR";
        responseMessage.style.color = "#ff0000";
    }
}