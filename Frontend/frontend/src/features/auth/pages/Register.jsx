import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router"
import { useAuth } from "../hook/useAuth"

const Register = () => {
    const { handleRegister } = useAuth()
    const { loading, error } = useSelector((state) => state.auth)

    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [contact, setContact] = useState("")
    const [password, setPassword] = useState("")

    const [isSeller, setIsSeller] = useState(false)


    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        await handleRegister(email, password, fullName, contact, isSeller)
        console.log("Register Function Triggered")

        setContact("")
        setEmail("")
        setFullName("")
        setPassword("")
        setIsSeller(false)
    }

    return (
        <div className="h-screen w-screen overflow-hidden bg-zinc-950 text-zinc-100 flex flex-col justify-center items-center px-4 py-4 font-sans selection:bg-amber-400 selection:text-zinc-950">
            {/* Background ambient glow */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl" />
            </div>

            <div className="w-full max-w-md space-y-4 relative z-10 my-auto">
                {/* Header */}
                <div className="text-center space-y-1.5">

                    <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">
                        Create an Account
                    </h1>
                    <p className="text-xs text-zinc-400">
                        Join Snitch today to discover and experience exclusive products
                    </p>
                </div>

                {/* Main Card */}
                <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800/80 rounded-2xl p-6 sm:p-7 shadow-2xl shadow-black/50 space-y-4">
                    {/* Error Banner */}
                    {error && (
                        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-start gap-2.5">
                            <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <div>
                                {typeof error === "string" ? error : error?.message || "Registration failed. Please check your credentials."}
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-3">
                        {/* Full Name */}
                        <div className="space-y-1">
                            <label htmlFor="fullName" className="block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                                Full Name
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                required
                                value={fullName}
                                onChange={(e) => { setFullName(e.target.value) }}
                                placeholder="John Doe"
                                className="w-full px-3.5 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition duration-200 text-sm"
                            />
                        </div>

                        {/* Email Address */}
                        <div className="space-y-1">
                            <label htmlFor="email" className="block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                placeholder="john@example.com"
                                className="w-full px-3.5 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition duration-200 text-sm"
                            />
                        </div>

                        {/* Contact Number */}
                        <div className="space-y-1">
                            <label htmlFor="contact" className="block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                                Contact Number
                            </label>
                            <input
                                id="contact"
                                name="contact"
                                type="tel"
                                required
                                value={contact}
                                onChange={(e) => { setContact(e.target.value) }}
                                placeholder="+1 234 567 8900"
                                className="w-full px-3.5 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition duration-200 text-sm"
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-1">
                            <label htmlFor="password" className="block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    placeholder="••••••••"
                                    className="w-full px-3.5 py-2.5 pr-10 bg-zinc-950/80 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition duration-200 text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-amber-400 transition-colors p-1"
                                >
                                    {showPassword ? (
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Checkbox: isSeller */}
                        <div className="pt-1">
                            <label className={`flex items-start gap-2.5 p-3 rounded-xl border transition-all duration-200 cursor-pointer ${isSeller
                                ? "bg-amber-400/10 border-amber-400/40 text-zinc-100"
                                : "bg-zinc-950/40 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                                }`}>
                                <input
                                    type="checkbox"
                                    name="isSeller"
                                    checked={isSeller}
                                    onChange={(e) => { setIsSeller(e.target.checked) }}
                                    className="mt-0.5 rounded border-zinc-700 bg-zinc-950 text-amber-400 focus:ring-amber-400 focus:ring-offset-zinc-900 accent-amber-400 w-3.5 h-3.5"
                                />
                                <div className="space-y-0.5">
                                    <span className="text-xs font-medium text-zinc-200 block">
                                        Register as a Seller
                                    </span>
                                    <span className="text-[11px] text-zinc-400 block leading-tight">
                                        Enable store features to sell and manage products on Snitch
                                    </span>
                                </div>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full mt-3 py-2.5 px-4 bg-amber-400 hover:bg-amber-300 active:scale-[0.99] text-zinc-950 font-semibold rounded-xl transition duration-200 flex items-center justify-center gap-2 shadow-lg shadow-amber-400/15 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin w-4 h-4 text-zinc-950" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    <span>Creating account...</span>
                                </>
                            ) : (
                                <span>Complete Registration</span>
                            )}
                        </button>
                    </form>

                    {/* Footer link */}
                    <div className="text-center pt-2 border-t border-zinc-800/60 text-xs text-zinc-400">
                        Already have an account?{" "}
                        <Link to="/login" className="text-amber-400 hover:underline font-medium ml-1">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register