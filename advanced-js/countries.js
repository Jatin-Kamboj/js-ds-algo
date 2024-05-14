const contries = {
    "Arabic (Egypt)": "ar-EG",
    "Arabic (Israel)": "ar-IL",
    "Arabic (Iraq)": "ar-IQ",
    "Arabic (Kuwait)": "ar-KW",
    "Arabic (Oman)": "ar-OM",
    "Arabic (Qatar)": "ar-QA",
    "Arabic (Saudi Arabia)": "ar-SA",
    "Arabic (Syria)": "ar-SY",
    "Arabic (United Arab Emirates)": "ar-AE",
    "Arabic (Yemen)": "ar-YE",
    "Bengali (India)": "bn-IN",
    "Burmese (Myanmar)": "my-MM",
    "English (Australia)": "en-AU",
    "English (India)": "en-IN",
    "English (United Kingdom)": "en-GB",
    "English (United States)": "en-US",
    "English (Canada)": "en-CA",
    "Filipino (Philippines)": "fil-PH",
    "Gujarati (India)": "gu-IN",
    "Hindi (India)": "hi-IN",
    "Kannada (India)": "kn-IN",
    "Khmer (Cambodia)": "km-KH",
    "Malayalam (India)": "ml-IN",
    "Marathi (India)": "mr-IN",
    "Nepali (Nepal)": "ne-NP",
    "Punjabi (India)": "pa-IN",
    "Tamil (India)": "ta-IN",
    "Telugu (India)": "te-IN",
    "Urdu (India)": "ur-IN",
    "Vietnamese (Vietnam)": "vi-VN"
}


const languagesList = Object.entries(contries).map(([key,value]) => {
    return {
        "language": key,
        "code": value

    }
})
    console.log(languagesList)