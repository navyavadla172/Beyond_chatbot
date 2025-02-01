"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import type React from "react" // Added import for React

export default function OrganizationSetupForm() {
  const [companyName, setCompanyName] = useState("")
  const [websiteUrl, setWebsiteUrl] = useState("")
  const [metadata, setMetadata] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Organization data:", { companyName, websiteUrl, metadata })
    // For now, we'll just redirect to the chatbot testing page
    router.push("/chatbot-testing")
  }

  const fetchMetadata = async () => {
    // In a real application, you would fetch this from your backend
    setMetadata(`Meta description for ${websiteUrl}`)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="mb-4">
        <label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="websiteUrl" className="block text-gray-700 text-sm font-bold mb-2">
          Website URL
        </label>
        <div className="flex">
          <input
            type="url"
            id="websiteUrl"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <button
            type="button"
            onClick={fetchMetadata}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
          >
            Fetch
          </button>
        </div>
      </div>
      {metadata && (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Metadata</label>
          <textarea
            value={metadata}
            readOnly
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={3}
          />
        </div>
      )}
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Set Up Organization
        </button>
      </div>
    </form>
  )
}

