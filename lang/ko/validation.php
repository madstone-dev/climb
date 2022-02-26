<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => ':attribute 수락이 필요합니다.',
    'accepted_if' => ':attribute 은 :other 가 :value 이어야 합니다.',
    'active_url' => ':attribute 는 사용가능한 URL 이 아닙니다.',
    'after' => ':attribute 는 :date 이후여야 합니다.',
    'after_or_equal' => ':attribute 는 :date 또는 이후여야 합니다.',
    'alpha' => ':attribute 은 문자만 포함해야 합니다.',
    'alpha_dash' => ':attribute 은 문자, 숫자, - 또는 _ 만 포함해야 합니다.',
    'alpha_num' => ':attribute 은 문자 또는 숫자 만 포함해야 합니다.',
    'array' => ':attribute 는 배열이어야 합니다.',
    'before' => ':attribute 는 :date 이전이어야 합니다.',
    'before_or_equal' => ':attribute 는 :date 또는 이전이어야 합니다.',
    'between' => [
        'numeric' => ':attribute 는 :min 과 :max 사이어야 합니다.',
        'file' => ':attribute 는 :min 과 :max 킬로바이트 사이어야 합니다.',
        'string' => ':attribute 는 :min 과 :max 글자 사이어야 합니다.',
        'array' => ':attribute 는 :min 과 :max 사이의 길이로 이루어진 배열이어야 합니다.',
    ],
    'boolean' => ':attribute 는 true 또는 false 여야 합니다.',
    'confirmed' => ':attribute 확인이 일치하지 않습니다.',
    'current_password' => '비밀번호가 일치하지 않습니다.',
    'date' => ':attribute 는 유효한 날짜가 아닙니다.',
    'date_equals' => ':attribute 는 :date 와 같아야 합니다.',
    'date_format' => ':attribute 는 :format 양식과 일치하지 않습니다.',
    'declined' => ':attribute 는 허용되지 않습니다.',
    'declined_if' => ':attribute 는 :other 가 :value 일 때 허용되지 않습니다.',
    'different' => ':attribute 와 :other 은 반드시 달라야합니다.',
    'digits' => ':attribute 는 :digits 자리 수여야 합니다.',
    'digits_between' => ':attribute 는 :min 와 :max 사이 자리수여야 합니다.',
    'dimensions' => ':attribute 의 이미지 크기가 잘못되었습니다.',
    'distinct' => ':attribute 에 중복값이 있습니다.',
    'email' => ':attribute 는 유효한 이메일 주소여야 합니다.',
    'ends_with' => ':attribute 는 :values 중 하나로 끝나야합니다.',
    'enum' => '선택된 :attribute 가 잘못되었습니다.',
    'exists' => '선택된 :attribute 가 잘못되었습니다.',
    'file' => ':attribute 는 파일이어야 합니다.',
    'filled' => ':attribute 는 값이 없습니다.',
    'gt' => [
        'numeric' => ':attribute 는 :value 보다 커야 합니다.',
        'file' => ':attribute 는 :value 킬로바이트 보다 커야 합니다.',
        'string' => ':attribute 는 :value 글자 보다 커야 합니다.',
        'array' => ':attribute 는 :value 길이보다 큰 배열이어야 합니다.',
    ],
    'gte' => [
        'numeric' => ':attribute 는 :value 와 같거나 커야 합니다.',
        'file' => ':attribute 는 :value 킬로바이트보다 같거나 커야 합니다.',
        'string' => ':attribute 는 :value 글자보다 같거나 커야 합니다.',
        'array' => ':attribute 는 :value 길이보다 같거나 큰 배열이어야 합니다.',
    ],
    'image' => ':attribute 는 반드시 이미지여야 합니다.',
    'in' => '선택된 :attribute 는 허용되지 않습니다.',
    'in_array' => ':attribute 항목은 :other 에 존재하지 않습니다.',
    'integer' => ':attribute 는 정수여야 합니다.',
    'ip' => ':attribute 는 유효한 IP 주소가 아닙니다.',
    'ipv4' => ':attribute 는 유효한 IPv4 주소가 아닙니다.',
    'ipv6' => ':attribute 는 유효한 IPv6 주소가 아닙니다.',
    'json' => ':attribute 는 유효한 JSON 문자열이 아닙니다.',
    'lt' => [
        'numeric' => ':attribute 는 :value 보다 작아야 합니다.',
        'file' => ':attribute 는 :value 킬로바이트 보다 작아야 합니다.',
        'string' => ':attribute 는 :value 글자 보다 작아야 합니다.',
        'array' => ':attribute 는 :value 길이보다 작은 배열이어야 합니다.',
    ],
    'lte' => [
        'numeric' => ':attribute 는 :value 와 작거나 커야 합니다.',
        'file' => ':attribute 는 :value 킬로바이트보다 작거나 커야 합니다.',
        'string' => ':attribute 는 :value 글자보다 작거나 커야 합니다.',
        'array' => ':attribute 는 :value 길이보다 작거나 큰 배열이어야 합니다.',
    ],
    'mac_address' => ':attribute 는 유효한 MAC 주소여야 합니다.',
    'max' => [
        'numeric' => ':attribute 는 :max 보다 클수 없습니다.',
        'file' => ':attribute 는 :max 킬로바이트보다 클수 없습니다.',
        'string' => ':attribute 는 :max 글자 보다 클수 없습니다.',
        'array' => ':attribute 는 :max 길이보다 큰 배열일수 없습니다.',
    ],
    'mimes' => ':attribute 는 :values 유형의 파일이어야 합니다.',
    'mimetypes' => ':attribute 는 :values 유형의 파일이어야 합니다.',
    'min' => [
        'numeric' => ':attribute 는 :max 보다 작을수 없습니다.',
        'file' => ':attribute 는 :max 킬로바이트보다 작을수 없습니다.',
        'string' => ':attribute 는 :max 글자 보다 작을수 없습니다.',
        'array' => ':attribute 는 :max 길이보다 작은 배열일수 없습니다.',
    ],
    'multiple_of' => ':attribute 는 :value 의 배수여야 합니다.',
    'not_in' => '선택한 :attribute 는 유효하지 않습니다.',
    'not_regex' => ':attribute 형식은 유효하지 않습니다.',
    'numeric' => ':attribute 은 숫자여야 합니다.',
    'password' => '비밀번호가 일치하지 않습니다.',
    'present' => ':attribute 필드가 있어야 합니다.',
    'prohibited' => ':attribute 필드는 금지되어 있습니다.',
    'prohibited_if' => ':attribute 필드는 :other 가 :value 일때 금지되어 있습니다.',
    'prohibited_unless' => ':attribute 필드는 :other 가 :values 가 아닐 경우 금지되어 있습니다.',
    'prohibits' => ':attribute 필드는 :other 가 존재하는 것을 금지합니다.',
    'regex' => ':attribute 양식이 유효하지 않습니다.',
    'required' => ':attribute 는 반드시 필요합니다.',
    'required_array_keys' => ':attribute 항목은 :values 를 포함해야 합니다.',
    'required_if' => ':attribute 필드는 :other 가 :value 일때 필요합니다.',
    'required_unless' => ':attribute 필드는 :other 가 :values 에 있지 않는 한 필수입니다.',
    'required_with' => 'The :attribute field is required when :values is present.',
    'required_with_all' => ':values 가 있는 경우 :attribute 필드가 필요합니다.',
    'required_without' => ':values 가 없으면 :attribute 필드가 필요합니다.',
    'required_without_all' => ':value 가 없는 경우 :attribute 필드가 필요합니다.',
    'same' => ':attribute 및 :other 는 일치해야 합니다.',
    'size' => [
        'numeric' => ':attribute 는 :size 여야 합니다.',
        'file' => ':attribute 는 :size 킬로바이트 여야 합니다.',
        'string' => ':attribute 는 :size 글자 여야 합니다.',
        'array' => ':attribute 는ntain :size 길이의 배열이어야 합니다.',
    ],
    'starts_with' => ':attribute 는 :values 중 하나로 시작해야 합니다. ',
    'string' => ':attribute 는 문자열이어야 합니다.',
    'timezone' => ':attribute 는 유효한 시간대여야 합니다.',
    'unique' => '이미 존재하는 :attribute 입니다.',
    'uploaded' => ':attribute 업로드에 실패했습니다.',
    'url' => ':attribute 는 유효한 URL 이 아닙니다.',
    'uuid' => ':attribute 는 유효한 UUID 이 아닙니다.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [],

];
