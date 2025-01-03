source "https://rubygems.org"

# Use specific versions for better compatibility
gem "jekyll", "~> 3.9.3"
gem "github-pages", "~> 228"
gem "webrick"

# Windows specific gems
platforms :mingw, :x64_mingw, :mswin do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
  gem 'wdm', '>= 0.1.1', platforms: [:mingw, :x64_mingw, :mswin]
end

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-include-cache"
  gem "jekyll-paginate"
  gem "jekyll-sitemap"
  gem "jekyll-gist"
  gem "jekyll-feed"
  gem "jemoji"
end

# Add this line to your existing Gemfile
gem "minimal-mistakes-jekyll"