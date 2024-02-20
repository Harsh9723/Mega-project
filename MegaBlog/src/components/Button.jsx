import React from 'react'

export default function Button({
    Children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = "",
    ...props
 
}) {
    return (
        <Button className={`px-4 py-2 rounded-lg ${textColor}${bgColor} ${className}`}
        {...props}>
            {Children}
        </Button>
  );
}

