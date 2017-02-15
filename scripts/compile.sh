file_name=$1
file_path='../js/'
file=$file_path$file_name
babel --plugins transform-react-jsx --presets babel-preset-es2015 $file --out-file ../js/script-compiled.js
browserify ../js/script-compiled.js  --outfile ../bundle.js

# # babel --plugins transform-react-jsx --presets babel-preset-es2015 ../js/index.js -t  browserify  --outfile ../bundle.js
rm ../js/script-compiled.js
# echo $file_out
# browserify ../js/script-compiled.js  --outfile ../bundle.js