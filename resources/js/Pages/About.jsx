import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head, usePage } from "@inertiajs/react";

// Props passed from your Laravel controller are automatically received here
export default function About({ username }) {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    About
                </h2>
            }
        >
            <Head title="About" />

            <div className="min-h-screen p-2 bg-gray-100 ">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        <h1>Welcome to your Inertia + React app!</h1>
                        <p>
                            Hello, {user.name} {username}
                        </p>
                        <a href="/about">Go to About Page (Full Page Load)</a>
                        <p>OR</p>
                        <Link href="/about">
                            Go to About Page (Inertia Visit)
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
