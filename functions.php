<?php 

add_action( 'wp_enqueue_scripts', 'salient_child_enqueue_styles',99);
function salient_child_enqueue_styles() {
  wp_deregister_style( 'main-styles' );
  wp_enqueue_style( 'main-styles', get_template_directory_uri() . '/style.css' );
  wp_enqueue_style( 'child-styles', get_stylesheet_directory_uri(). '/style.css', array( 'main-styles' ) );
}


add_action('wp_enqueue_scripts', 'theme_script');
function theme_script() {
    wp_enqueue_script( 'theme_script', get_stylesheet_directory_uri() . '/script.js', array( 'jquery' ), '1.0', true );
}

function cp_project_thumbs( $atts, $content = null ) {

  extract(shortcode_atts(array(
                "category" => 'null',
                "num" => -1
        ), $atts));

  global $post;

      $args = array(
        'post_type' => 'portfolio',
        'post_status' => 'publish',
        'posts_per_page' => $num,
        'taxonomy' => 'project-type',
        'term' => $category,
        'caller_get_post' => 1
      );

      $output = ''; 
      
      $posts = null;
      $posts = new WP_Query($args);

      if ($posts->have_posts()) :
        
        $output .= '<div class="project-items text-align-center">';
        while ($posts->have_posts()) : $posts->the_post();

          $custom_thumbnail = get_post_meta($post->ID, '_nectar_portfolio_custom_thumbnail', true); 

          $output .= '<div class="project-item style-2">';
            $output .= '<img class="custom-thumbnail" src="'.$custom_thumbnail.'" alt="'. get_the_title() .'"/>';
            $output .= '<div class="project-info-bg"></div>';
            $output .= '<div class="project-info">';
              $output .= '<a href="' . get_the_permalink() . '"></a>';
              $output .= '<div class="vert-center"><h3>' . get_the_title() . '</h3></div>';           
            $output .= '</div>';           
          $output .= '</div>';
              
        endwhile;
        $output .= '</div>';
      endif;

      wp_reset_postdata();
      return $output;
}
add_shortcode("project-thumbs", "cp_project_thumbs");

?>