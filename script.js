// Emergency Help Modal

function showSOS() {
    document.getElementById("sosModal").style.display = "block";
}

function closeSOS() {
    document.getElementById("sosModal").style.display = "none";
}


// Emergency Call

function callNumber(number) {
    window.location.href = "tel:" + number;
}


// Safety Check

function checkSafety() {

    const location = document
        .getElementById("locationInput")
        .value
        .trim();

    const result = document.getElementById("safetyResult");

    if (location === "") {
        result.style.display = "block";
        result.innerHTML =
            "⚠️ Please enter an area name first.";
        return;
    }

    result.style.display = "block";

    result.innerHTML = `
        <strong>🛡️ Safety Guidance for ${location}</strong>
        <br><br>
        • Stay aware of your surroundings.<br>
        • Prefer well-lit and populated areas.<br>
        • Keep your phone charged.<br>
        • Inform a trusted person about your travel plans.<br>
        • In an emergency, contact the appropriate emergency service.
    `;
}


// AI Assistant

function askAI() {

    const input = document.getElementById("userQuestion");
    const question = input.value.trim();

    if (question === "") {
        return;
    }

    const chatBox = document.getElementById("chatBox");

    // User message

    const userMessage = document.createElement("div");

    userMessage.className = "user-message";
    userMessage.textContent = question;

    chatBox.appendChild(userMessage);

    // AI response

    const answer = getAIResponse(question);

    setTimeout(function() {

        const botMessage = document.createElement("div");

        botMessage.className = "bot-message";
        botMessage.textContent = answer;

        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 500);

    input.value = "";
}


// Simple AI-style response system

function getAIResponse(question) {

    const q = question.toLowerCase();

    if (
        q.includes("emergency") ||
        q.includes("danger") ||
        q.includes("help")
    ) {
        return "If you are in immediate danger, move to a safer public place and contact an appropriate emergency service or a trusted person.";
    }

    if (
        q.includes("cyber") ||
        q.includes("scam") ||
        q.includes("otp")
    ) {
        return "Never share OTPs, passwords, PINs or banking information. If a message looks suspicious, do not click its links.";
    }

    if (
        q.includes("night") ||
        q.includes("travel")
    ) {
        return "For safer travel, prefer populated and well-lit areas, keep your phone charged and let someone you trust know your plans.";
    }

    if (
        q.includes("location") ||
        q.includes("privacy")
    ) {
        return "Avoid publicly sharing your precise location or other sensitive personal information.";
    }

    return "I can help with general safety topics such as emergency preparation, cyber safety, travel safety and privacy.";
}


// Press Enter to Send

function handleEnter(event) {

    if (event.key === "Enter") {
        askAI();
    }
}


// Close modal when clicking outside

window.onclick = function(event) {

    const modal = document.getElementById("sosModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }
};