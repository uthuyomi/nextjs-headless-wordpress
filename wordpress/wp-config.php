<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'headless-wp' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Rsixs0rnNnZRf!:}1&RP?!w+K<oXl&d-Siv, sl8*:tlz/M02q0Y1eT7{[BCM=@i' );
define( 'SECURE_AUTH_KEY',  ']9KaD 9XXuiI=cXdKJW(eTm@* -68<(xU#o7ElLm{5@yD/GDk_DU|]1?yyi-2!5J' );
define( 'LOGGED_IN_KEY',    'h6-]W=(cFkROftuJl-!./m:&Ne0h9aORk*MbE<=]kqH,mfc&S} sGPBCX%>XP7.T' );
define( 'NONCE_KEY',        'H(|kVde3}Y+?j:yDLbwDj!uKqcz1|VxjCJf_$9O%?j7hQhSMoFH^c.$`fU2u4BOp' );
define( 'AUTH_SALT',        'R~Q7$UnRmE[bYOpeVPi^X%!ekRdd[/>Z[F=::8, ^DHvypFXt.E:#)`K}DZ(kY$C' );
define( 'SECURE_AUTH_SALT', 'MV`xB`JQG=55o~Td,[O8A93kW`-Lpgo:Yy.X65mR>!gSjCsIc+d}8p3c8cAv7rA9' );
define( 'LOGGED_IN_SALT',   'T[$UeEM4K_5IKLC)Cae5@jD&DFnUw2?E98]n=CGGgv ``}Lh!8K>f!1,eVW3$jBR' );
define( 'NONCE_SALT',       '/8zkA6~bO[4VqRgZ@fvrO[vc$/$?VM,q.aFoKlz;JZfRRYTf6&z-@)U(#)kIh;XS' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
