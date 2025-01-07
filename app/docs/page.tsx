import { Metadata } from 'next'
import { TitleAndDescription } from '@/components/TitleAndDescription'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs'

export const metadata: Metadata = {
  title: 'Crustdata API Documentation',
  description: 'Comprehensive documentation for the Crustdata API.',
}

export default function CrustdataAPIDocs() {
  const apiDocsContent = `
# Crustdata Dataset API Documentation

## Table of Contents
1. [Job Listings](#1-job-listings)
2. [Funding Milestones](#2-funding-milestones)
3. [Decision Makers/People Info](#3-decision-makerspeople-info)
4. [LinkedIn Employee Headcount and Follower Count](#4-linkedin-employee-headcount-and-follower-count)
5. [Employee Headcount By Function](#5-employee-headcount-by-function)
6. [Glassdoor Profile Metrics](#6-glassdoor-profile-metrics)
7. [G2 Profile Metrics](#7-g2-profile-metrics)
8. [Web Traffic](#8-web-traffic)
9. [Investor Portfolio](#9-investor-portfolio)

## 1. Job Listings

Use this request to get job listings that were last updated by the company on a specific date for selected companies.

### Request

\`\`\`bash
curl --request POST \\
  --url https://api.crustdata.com/data_lab/job_listings/Table/ \\
  --header 'Accept: application/json, text/plain, */*' \\
  --header 'Accept-Language: en-US,en;q=0.9' \\
  --header 'Authorization: Token $auth_token' \\
  --header 'Content-Type: application/json' \\
  --header 'Origin: https://crustdata.com' \\
  --header 'Referer: https://crustdata.com/' \\
  --data '{
    "tickers": [],
    "dataset": {
      "name": "job_listings",
      "id": "joblisting"
    },
    "filters": {
      "op": "and",
      "conditions": [
        {"column": "company_id", "type": "in", "value": [7576, 680992, 673947, 631280, 636304, 631811]},
        {"column": "date_updated", "type": ">", "value": "2024-02-01"}
      ]
    },
    "groups": [],
    "aggregations": [],
    "functions": [],
    "offset": 0,
    "limit": 100,
    "sorts": []
  }'
\`\`\`

### Response

[View JSON response](https://jsonhero.io/j/3ZQ16TON5oUV)

## 2. Funding Milestones

... (Rest of your API documentation content here)
  `

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold italic text-purple-600 mb-4">
          Welcome to Crustdata API Support
        </h1>
        <p className="text-lg text-gray-600">
          Explore our comprehensive API documentation to get started.
        </p>
      </div>
      <TitleAndDescription title="API Documentation" description="Learn how to use the Crustdata API." />
      <Tabs defaultValue="overview" className="w-full mt-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="company">Company Endpoints</TabsTrigger>
          <TabsTrigger value="people">People Endpoints</TabsTrigger>
          <TabsTrigger value="usage">Usage Endpoints</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          {/* Introduction content */}
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: apiDocsContent }} />
        </TabsContent>
        <TabsContent value="company">
          {/* Company Endpoints content */}
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: apiDocsContent }} />
        </TabsContent>
        <TabsContent value="people">
          {/* People Endpoints content */}
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: apiDocsContent }} />
        </TabsContent>
        <TabsContent value="usage">
          {/* Usage Endpoints content */}
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: apiDocsContent }} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

