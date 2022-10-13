<?php

function form_field($field_type, $field_elements = NULL, $options = NULL) {

    // echo "{".$field_type."}";

    if (is_array($field_elements)) {
        if (array_key_exists('label', $field_elements)) {
            $field_label = $field_elements['label'];
        } else {
            $field_label = NULL;
        }
        if (array_key_exists('id', $field_elements)) {
            $field_id = $field_elements['id'];
        } else {
            $field_id = NULL;
        }

        if (array_key_exists('icon', $field_elements)) {
            $field_icon = $field_elements['icon'];
        } else {
            $field_icon = NULL;
        }



        if (array_key_exists('name', $field_elements)) {
            $field_name = $field_elements['name'];
        } else {
            $field_name = NULL;
        }
        if (array_key_exists('placeholder', $field_elements)) {
            $field_placeholder = $field_elements['placeholder'];
        } else {
            $field_placeholder = NULL;
        }
        if (array_key_exists('value', $field_elements)) {
            $field_value = $field_elements['value'];
        } else {
            $field_value = NULL;
        }
        if (array_key_exists('button', $field_elements)) {
            $field_button = $field_elements['button'];
        } else {
            $field_button = NULL;
        }
        if (array_key_exists('heading', $field_elements)) {
            $field_heading = $field_elements['heading'];
        } else {
            $field_heading = NULL;
        }
        if (array_key_exists('title', $field_elements)) {
            $field_title = $field_elements['title'];
        } else {
            $field_title = NULL;
        }
        if (array_key_exists('class', $field_elements)) {
            $field_class = $field_elements['class'];
        } else {
            $field_class = NULL;
        }
        if (array_key_exists('readonly', $field_elements)) {
            $field_readonly = $field_elements['readonly'];
        } else {
            $field_readonly = NULL;
        }
        if (array_key_exists('disabled', $field_elements)) {
            $field_disabled = $field_elements['disabled'];
        } else {
            $field_disabled = NULL;
        }
        if (array_key_exists('checked', $field_elements)) {
            $field_checked = $field_elements['checked'];
        } else {
            $field_checked = NULL;
        }
    }




    include('templates/form-' . $field_type . '.php');
}
