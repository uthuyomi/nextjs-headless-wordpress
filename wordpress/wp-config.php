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
define( 'AUTH_KEY',         '#M!pmNa}#5r@BUmt^-XHQM@=jic^WFwo5_B9PI=y4ZSrUNF`!C-OC2GAg?m{:J-N' );
define( 'SECURE_AUTH_KEY',  'YjV$^N`*0.881xuVRwa9*{6EMmm-eWeuzkgUz!|51#2v|d^*Rv[;5BQp*;Y]X}$u' );
define( 'LOGGED_IN_KEY',    'wqe^@}3#&:Jv`zkOH;?cxF(ciX/4#3P%?sW!K|K]!yRnG0i%)VOt ulG RUet`+$' );
define( 'NONCE_KEY',        'y5d60Evq4>yH-usai]QI8c&NFgsE)c(a<*O% w%K`JuL#V[#In:TqYBJYGP;|W $' );
define( 'AUTH_SALT',        '7sHvBi<YTDl6Yt*Kz[,(!l8mhP`^m,P>A$GxPO/gl9$@ANrol_s2K PquwFa&i/Z' );
define( 'SECURE_AUTH_SALT', 's;w^B)$?Eo_NeZJvywv5QTQCAR#=2VTjw_t K3nevYz1c?Rt%zX1#A6v5l@.~+[$' );
define( 'LOGGED_IN_SALT',   '<h}5B.nVZfNiCk!U!fL9/A]3uWM|@>i/_V#Fz`C~&q8p5abZG,0Wu6H4fn%Dz8Y~' );
define( 'NONCE_SALT',       'IM>$#n$R69+abbqX?XZt*vnB9H:B](Pc1<Qn=JhVd5l`9*brA6hRo=?8t2O&+%z)' );

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
