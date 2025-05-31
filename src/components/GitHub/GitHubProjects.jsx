import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaEye,
} from "react-icons/fa";
import { GoCommit } from "react-icons/go";
import styles from "./GitHubProjects.module.css";
import { useTranslation } from "react-i18next";

const GITHUB_USERNAME = "Alexandru-Dumitrel-Gheorghe";
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const GitHubProjects = () => {
  const { t } = useTranslation();
  const [repos, setRepos] = useState([]);
  const [commitCounts, setCommitCounts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(0, 188, 212, 0.3)",
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
  };

  // Fetch repositories
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`,
          {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        setRepos(data.slice(0, 3));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Fetch commit counts
  useEffect(() => {
    const fetchCommitCounts = async () => {
      if (repos.length > 0) {
        const commitCountsData = await Promise.all(
          repos.map(async (repo) => {
            try {
              const response = await fetch(
                `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits?per_page=1`,
                {
                  headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                    Accept: "application/vnd.github.v3+json",
                  },
                }
              );
              if (!response.ok) {
                throw new Error("Failed to fetch commits for " + repo.name);
              }
              const linkHeader = response.headers.get("Link");
              let commitCount = 1;
              if (linkHeader) {
                const match = linkHeader.match(/page=(\d+)>; rel="last"/);
                if (match && match[1]) {
                  commitCount = parseInt(match[1], 10);
                }
              }
              return { id: repo.id, commitCount };
            } catch (error) {
              return { id: repo.id, commitCount: "?" };
            }
          })
        );

        const commitCountsMap = {};
        commitCountsData.forEach((item) => {
          commitCountsMap[item.id] = item.commitCount;
        });
        setCommitCounts(commitCountsMap);
      }
    };

    fetchCommitCounts();
  }, [repos]);

  const getTechIcons = (repo) => {
    const lowerName = repo.name.toLowerCase();
    const icons = [];

    if (lowerName.includes("react"))
      icons.push(
        <FaReact key="react" className={styles.techIcon} title="React" />
      );
    if (lowerName.includes("node"))
      icons.push(
        <FaNodeJs key="node" className={styles.techIcon} title="Node.js" />
      );
    if (lowerName.includes("js"))
      icons.push(
        <FaJs key="js" className={styles.techIcon} title="JavaScript" />
      );
    if (lowerName.includes("html"))
      icons.push(
        <FaHtml5 key="html" className={styles.techIcon} title="HTML5" />
      );
    if (lowerName.includes("css"))
      icons.push(
        <FaCss3Alt key="css" className={styles.techIcon} title="CSS3" />
      );
    if (lowerName.includes("mongo") || lowerName.includes("db"))
      icons.push(
        <FaDatabase key="db" className={styles.techIcon} title="MongoDB" />
      );
    if (lowerName.includes("git"))
      icons.push(
        <FaGitAlt key="git" className={styles.techIcon} title="Git" />
      );

    return icons;
  };

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
        <p>{t("githubProjects.loader")}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>{t("githubProjects.error", { error })}</div>
    );
  }

  return (
    <section id="github-projects" className={styles.githubProjects}>
      {/* Animated background */}
      <div className={styles.animatedBackground}></div>

      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <FaGithub className={styles.githubIcon} /> {t("githubProjects.heading")}
      </motion.h2>

      <motion.div
        className={styles.projectGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {repos.map((repo) => (
          <motion.div
            key={repo.id}
            className={styles.projectCard}
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className={styles.repoName}>{repo.name}</h3>
            <div className={styles.techIcons}>{getTechIcons(repo)}</div>
            <p className={styles.repoDescription}>
              {repo.description || t("githubProjects.noDescription")}
            </p>
            <motion.a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.repoLink}
              whileHover={{ color: "#3cc2c2" }}
            >
              {t("githubProjects.repoLinkText")} <FaExternalLinkAlt />
            </motion.a>
            <div className={styles.repoExtra}>
              {[
                {
                  icon: <FaStar />,
                  value: repo.stargazers_count,
                  title: "Stars",
                },
                {
                  icon: <FaCodeBranch />,
                  value: repo.forks_count,
                  title: "Forks",
                },
                {
                  icon: <FaEye />,
                  value: repo.watchers_count,
                  title: "Watchers",
                },
                {
                  icon: <GoCommit />,
                  value: commitCounts[repo.id] || 0,
                  title: "Commits",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className={styles.repoStat}
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.icon} {stat.value}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GitHubProjects;
