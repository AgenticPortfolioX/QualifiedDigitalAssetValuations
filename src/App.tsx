/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense } from "react";
import { Loader2 } from "lucide-react";
import blogPostsRaw from "./data/blog-posts.json";
import { BlogPost } from "./types";

const blogPosts = blogPostsRaw as BlogPost[];

const HomePage = React.lazy(() => import("./pages/HomePage"));
const PrivacyPolicyPage = React.lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsOfServicePage = React.lazy(() => import("./pages/TermsOfServicePage"));
const BlogPage = React.lazy(() => import("./pages/BlogPage"));
const BlogPostPage = React.lazy(() => import("./pages/BlogPostPage"));
const ComplianceLinksPage = React.lazy(() => import("./pages/ComplianceLinksPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ScopeServicesPage = React.lazy(() => import("./pages/ScopeServicesPage"));
const ComplianceHub = React.lazy(() => import("./pages/ComplianceHub"));
const QuoteWorkflow = React.lazy(() => import("./pages/QuoteWorkflow"));

function LoadingSpinner() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Loader2 className="w-12 h-12 animate-spin text-accent-blue" />
    </div>
  );
}

export default function App() {
  const [viewState, setViewState] = useState<"home" | "compliance" | "about" | "quote" | "scope" | "blog" | "blog-post" | "compliance-links" | "privacy" | "terms">("home");
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const [viewName, postId] = hash.split('/');
      
      const validViews = ["home", "compliance", "about", "quote", "scope", "blog", "blog-post", "compliance-links", "privacy", "terms"];
      
      if (validViews.includes(viewName)) {
        setViewState(viewName as any);
        if (viewName === "blog-post" && postId) {
          setSelectedPostId(postId);
        }
      } else if (hash === "legal") {
        // Redirect old legal link to blog
        window.location.hash = "blog";
      } else {
        setViewState("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    if (window.location.hash) {
      handleHashChange();
    }
    
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const setView = (v: string) => { window.location.hash = v; };
  const view = viewState;

  if (typeof window !== "undefined") {
    (window as any).setView = setView;
  }

  let content = null;

  if (view === "privacy") {
    content = <PrivacyPolicyPage onBack={() => setView("home")} setView={setView} />;
  } else if (view === "terms") {
    content = <TermsOfServicePage onBack={() => setView("home")} setView={setView} />;
  } else if (view === "blog") {
    content = <BlogPage 
      onBack={() => setView("home")} 
      onSelectPost={(id: string) => setView(`blog-post/${id}`)}
      setView={setView}
    />;
  } else if (view === "blog-post") {
    const post = blogPosts.find(p => p.id === selectedPostId);
    content = <BlogPostPage 
      post={post || blogPosts[0]} 
      onBack={() => setView("blog")} 
      setView={setView}
    />;
  } else if (view === "compliance-links") {
    content = <ComplianceLinksPage onBack={() => setView("home")} setView={setView} />;
  } else if (view === "compliance") {
    content = <ComplianceHub onBack={() => setView("home")} onStart={() => setView("quote")} setView={setView} />;
  } else if (view === "about") {
    content = <AboutPage onBack={() => setView("home")} onStart={() => setView("quote")} setView={setView} />;
  } else if (view === "quote") {
    content = <QuoteWorkflow onBack={() => setView("home")} setView={setView} />;
  } else if (view === "scope") {
    content = <ScopeServicesPage onBack={() => setView("home")} onStart={() => setView("quote")} setView={setView} />;
  } else {
    content = <HomePage setView={setView} />;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      {content}
    </Suspense>
  );
}
