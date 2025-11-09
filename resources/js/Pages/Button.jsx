import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head, usePage } from "@inertiajs/react";
import { Save, X } from "lucide-react";

// Props passed from your Laravel controller are automatically received here
export default function Form1({ username }) {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Form1
                </h2>
            }
        >
            <Head title="About" />
            <div className="min-h-screen p-2 bg-gray-100 ">
                <div className="container max-w-screen-lg mx-auto">
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-1/2 md:w-1/3 px-3">
                            <h3 className="text-gray-400 font-light text-lg mb-3">
                                Primary
                            </h3>
                            <div className="mb-2">
                                <button className="btn-primary-lg">
                                    <Save color="white" size={15} />
                                    Simpan
                                </button>
                            </div>
                            <div className="mb-2">
                                <button className="btn-secondary-lg">
                                    Simpan
                                    <Save color="white" size={15} />
                                </button>
                            </div>
                            <hr className="py-2" />

                            <div className="mb-2">
                                <button className="btn-primary-sm">
                                    <Save color="white" size={15} />
                                    Simpan
                                </button>
                            </div>
                            <div className="mb-2">
                                <button className="btn-secondary-sm">
                                    Simpan
                                    <Save color="white" size={15} />
                                </button>
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/3 px-3">
                            <h3 className="text-gray-400 font-light text-lg mb-3">
                                Secondary
                            </h3>
                            <div className="mb-2">
                                <button className="btn-accent-lg">
                                    <X color="black" size={16} />
                                    Batalkan
                                </button>
                            </div>
                            <div className="mb-2">
                                <button className="btn-accent-lg">
                                    Batalkan
                                    <X color="black" size={16} />
                                </button>
                            </div>
                            <hr className="py-2" />
                            <div className="mb-2">
                                <button className="btn-accent-sm">
                                    <X color="black" size={16} />
                                    Batalkan
                                </button>
                            </div>
                            <div className="mb-2">
                                <button className="btn-accent-sm">
                                    Batalkan
                                    <X color="black" size={16} />
                                </button>
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/3 px-3">
                            <h3 className="text-gray-400 font-light text-lg mb-3">
                                Text
                            </h3>
                            <div className="mb-2">
                                <button className="px-5 py-3 rounded-xl text-sm font-medium text-indigo-600 bg-white outline-none focus:outline-none border-4 border-transparent hover:text-indigo-800 focus:border-purple-200 active:border-transparent active:text-grey-900 transition-all">
                                    <i className="mdi mdi-circle-outline mr-2 text-xl align-middle leading-none"></i>
                                    Button
                                </button>
                            </div>
                            <div className="mb-2">
                                <button className="px-5 py-3 rounded-xl text-sm font-medium text-indigo-600 bg-white outline-none focus:outline-none border-4 border-transparent hover:text-indigo-800 focus:border-purple-200 active:border-transparent active:text-grey-900 transition-all">
                                    Button
                                    <i className="mdi mdi-circle-outline ml-2 text-xl align-middle leading-none"></i>
                                </button>
                            </div>
                            <div className="mb-2">
                                <button className="px-5 py-3 rounded-xl text-sm font-medium text-indigo-600 bg-white outline-none focus:outline-none border-4 border-transparent hover:text-indigo-800 focus:border-purple-200 active:border-transparent active:text-grey-900 transition-all">
                                    Button
                                </button>
                            </div>
                            <div className="mb-2">
                                <button className="px-5 py-3 rounded-xl text-sm font-medium text-indigo-600 bg-white outline-none focus:outline-none border-4 border-transparent hover:text-indigo-800 focus:border-purple-200 active:border-transparent active:text-grey-900 transition-all">
                                    <i className="mdi mdi-circle-outline text-xl align-middle leading-none"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
