<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'u732299870_azuqa');

/** MySQL database username */
define('DB_USER', 'u732299870_umeby');

/** MySQL database password */
define('DB_PASSWORD', 'aMahyTuJeS');

/** MySQL hostname */
define('DB_HOST', 'mysql');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'NYXYMClMYuHg51Eu7wcu4L5P1VtUGaF3TwZyzZpQK37tTDxUi8uHbM5zJ1WSX5hi');
define('SECURE_AUTH_KEY',  'M8cDXoFqE2iNS3GKGsHXtehe7qXYToSb5PJ3GHdVCa0ltwYY5hR6To3xWrVdP5JU');
define('LOGGED_IN_KEY',    'jggDggGSElBlp0f4D0yBBxuaELm3bQLtVlgqHOSfh2yZx74JsZVUI64TEZMYlk61');
define('NONCE_KEY',        '21VEYr7v6ZHuRdP2bIC2IgiyK42FrXX9lfl07kFMJITWh8PQvZFdryuJM2Gq87jq');
define('AUTH_SALT',        'PD2goJ8vmVzTqpxf4Wh96ZsA1v8zV9UQQWKpMJEFQfTjbJcO0SRIFaDPOlzT3hha');
define('SECURE_AUTH_SALT', 'CMvVlAEysmFYXR1atWZc4mVWFVwMYkvRUAhQrTQRrJ1nRkYMo2zYYGmx0m9Jl1fC');
define('LOGGED_IN_SALT',   'v3oFOiuSTcpOUThs7vSkAAZeMoQR13oq4rcNhefacOdN6udjZ4Wi1JPzC6KFdSUz');
define('NONCE_SALT',       '6ztvS3IIvoUU4PAYk4xToNoaEy2SCB4o2zmr8UjWuvkMbwyJ3tSBXjP2FaFDk1sF');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');define('FS_CHMOD_DIR',0755);define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed upstream.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'hzdn_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
