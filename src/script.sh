#!/bin/bash

# Function to update files in a directory
update_files() {
    local directory_path=$1
    # Iterate over files in the directory
    for file in "$directory_path"/*.svg; do
        # Check if the file exists and is a regular file
        if [ -f "$file" ]; then

            file_name_no_spaces=$(basename "$file" | tr -d ' ' | sed 's/.svg$/.svg/')

            # Read the content of the file
            content=$(<"$file")
            
            # Replace stroke and fill attributes
            # new_content1=$(echo "$content" | sed -E 's/stroke\s*=\s*"([^"]*)"/stroke={stroke}/g; s/fill\s*=\s*"([^"]*)"/fill={fill}/g')
            # new_content1=$(echo "$content" | sed -E '
            # s/stroke\s*=\s*"([^"]*)"/stroke={stroke}/g; 
            # s/fill\s*=\s*"([^"]*)"/fill={fill}/g;
            # s/width\s*=\s*"([^"]*)"/width={width}/g;
            # s/height\s*=\s*"([^"]*)"/height={height}/g;
            # ')
            temp_content=$(echo "$content" | sed -E '
            s/stroke\s*=\s*"([^"]*)"/stroke={stroke}/g; 
            s/fill\s*=\s*"([^"]*)"/fill={fill}/g;
            ')

            # Write the updated content back to the file
            # echo -e "$temp_content" > "$file"
            # content_4=$(<"$file")

            # temp_content2=$(echo "$content_4" | sed -E '
            # s/stroke-width={width}/stroke-width={strokeWidth}/g;
            # ')
            # new_content1=$(echo "$content" | sed -E '
            # s/\bstroke\s*=\s*"([^"]*)"/stroke={stroke}/g; 
            # s/\bfill\s*=\s*"([^"]*)"/fill={fill}/g;
            # s/\bwidth\s*=\s*"([^"]*)"/width={width}/g;
            # s/\bheight\s*=\s*"([^"]*)"/height={height}/g;
            # ')
            # new_content1=$(echo "$temp_content" | sed -E 's/stroke\s*=\s*"([^"]*)"/stroke={stroke}/g; s/fill\s*=\s*"([^"]*)"/fill={fill}/g; s/(width|height)\s*=\s*"[^"]*"//g')

            # Wrap content with React component structure
            new_content="import React from \"react\";\n\nexport default ({ stroke, fill }: { stroke: string, fill: string }) => (\n$temp_content\n);"

            # Write the updated content back to the file
            # echo -e "$temp_content2" > "$file"
            echo -e "$new_content" > "$file"

            # Rename the file extension to .tsx
            new_filename="${file_name_no_spaces%.svg}.tsx"
            mv "$file" "$directory_path/$new_filename"

            echo "Updated: $new_filename"
        fi
    done
}

# Example usage
directory_path="./Test2"
update_files "$directory_path"