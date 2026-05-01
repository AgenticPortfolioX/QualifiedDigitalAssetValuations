const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const imports = `import React, { useState, useEffect, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, Share2, Shield, LayoutGrid, Play, Pause, Coins, FileText, TrendingUp, ArrowLeft, CheckCircle2, Scale, BarChart3, Lock, UserCheck, GraduationCap, Briefcase, History, Check, Calendar, Mail, Phone, User, ArrowRight, ChevronRight, ChevronLeft, Layers, Zap, Image, Gavel, Heart } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import blogPostsRaw from "../data/blog-posts.json";
import { BlogPost } from "../types";

const blogPosts = blogPostsRaw as BlogPost[];

`;

const files = fs.readdirSync(pagesDir);
files.forEach(file => {
    if (file.endsWith('.tsx') && file !== 'HomePage.tsx') {
        const filePath = path.join(pagesDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        // remove old imports (everything before `export default function`)
        content = content.replace(/^[\s\S]*?(?=export default function)/, '');
        fs.writeFileSync(filePath, imports + content, 'utf8');
    }
});
console.log('Imports fixed.');
