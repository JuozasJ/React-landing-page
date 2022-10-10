import React from "react"
import invite from "./assets/Invite Friends Img.svg"
import collect from "./assets/Collect coins img.svg"
import voucher from "./assets/Get voucher img.svg"
import successIcon from "./assets/success-icon.svg"
import email from "./assets/email icon.svg"

function InputElement(props) {
    return (
        <div className="input-element">
            <form onSubmit={props.handleSubmit}>
                <label className="input-container">
                    <img src={email} alt="Email:" />
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        onChange={props.handleChange}
                        onBlur={props.generateReferral}
                        name="email"
                        value={props.formEmail} />
                </label>    
                <button>Get Referral Link</button>
            </form>
            {props.error && <p className="error">Error State</p>}
        </div>
    )
}

function ReferralLink(props) {
    function copyUrl() {
        navigator.clipboard.writeText(props.referralUrl)
    }

    return (
        <div className="link-element">
            <div className="success-message">
                <img src={successIcon} alt="Success!" />
                <p>Your email is confirmed!</p>
            </div>    
            <div className="link-url">
                <div className="url-container">
                    <p>{props.referralUrl}</p>
                </div>
                <button className="copy-btn" onClick={copyUrl}>Copy<span> URL</span></button>
            </div>
        </div>
    )
}

function ReferElement() {
    const [error, setError] = React.useState(false)
    const [submitted, setSubmitted] = React.useState(false)
    const [formData, setFormData] = React.useState({
        email: "",
        referralUrl: ""
    })

    function handleChange(event) {
        setFormData(prevState => ({...prevState, email: event.target.value}))
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (formData.email) {
                /*let req = new XMLHttpRequest()
                req.open("PUT", "https://api.jsonbin.io/v3/b/633377575c146d63caab9680", true)
                req.setRequestHeader("Content-Type", "application/json")
                req.setRequestHeader("X-Master-Key", "*")
                req.send(JSON.stringify(formData))*/
                setSubmitted(true)
                setError(false)
        } else {
            setError(true)
        }
    }

    function generateReferral(event) {
        if (event.target.value) {
            setFormData(prevState => ({...prevState, referralUrl: "https://company.com/referral"}))
        }
    }

    return (
        <div className="refer-element">
            <div className="refer-container">
                <h1>REFER FRIENDS AND GET REWARDS</h1>
                <p className="refer-text">Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>
                {submitted ?
                    <ReferralLink referralUrl={formData.referralUrl}/> :
                    <InputElement
                        error={error}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        generateReferral={generateReferral}
                        formEmail={formData.email}/>}
                <p className="limits">Limits on max rewards apply.</p>
            </div>
        </div>
    )
}

function GridElement() {
    return (
        <div className="grid-container">
            <div className="grid">
                <img src={invite} alt="Invite Friends"/>
                <div>
                    <h2>STEP 1</h2>
                    <h1>INVITE FRIENDS</h1>
                    <p>Refer friends with your unique referral link.</p>
                </div>
            </div>
            <div className="grid-reversed">
                <img src={collect} alt="Collect coins"/>
                <div>
                    <h2>STEP 2</h2>
                    <h1>COLLECT COINS</h1>
                    <p>Get 1 coin for each friend that installs our extension using your referral link.</p>
                </div>
            </div>
            <div className="grid">
                <img src={voucher} alt="Get voucher"/>
                <div>
                    <h2>STEP 3</h2>
                    <h1>GET VOUCHER</h1>
                    <p>Redeem for a $20 hotel booking voucher once you collect 20 coins.</p>
                </div>
            </div>
        </div>
    )
}

function MainContent() {
    return (
        <main>
            <div className="main-content">
                <ReferElement />
                <GridElement />
            </div>
        </main>
    )
}

export default MainContent
