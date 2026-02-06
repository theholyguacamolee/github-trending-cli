import { getDateFromDuration } from './utils/date.js';
import { fetchTrendingRepos } from './api/github.js';
import { formatRepos } from './utils/formatter.js';
import chalk from 'chalk';

export default async function run({ duration, limit }) {
  try {
    // Show loading message
    console.log(chalk.cyan(`\n🔍 Fetching top ${limit} trending repositories from the last ${duration}...\n`));
    
    const sinceDate = getDateFromDuration(duration);
    const repos = await fetchTrendingRepos(sinceDate, Number(limit));
    formatRepos(repos);
  } catch (error) {
    console.error(chalk.red('\n❌ Error:'), error.message);
    process.exit(1);
  }
}
