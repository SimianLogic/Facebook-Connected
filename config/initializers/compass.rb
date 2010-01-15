require 'compass'
require 'compass-colors'
require 'fancy-buttons'

# If you have any compass plugins, require them here.
Compass.configuration.parse(File.join(RAILS_ROOT, "config", "compass.rb"))
Compass.configuration.environment = RAILS_ENV.to_sym
Compass.configure_sass_plugin!