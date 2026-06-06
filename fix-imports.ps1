# Fix versioned imports in all UI component files
$files = Get-ChildItem -Path "MEDI JOURNEY - Copy/components/ui" -Filter "*.tsx" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    # Remove version numbers from imports (e.g., @radix-ui/react-accordion@1.1.2 -> @radix-ui/react-accordion)
    $newContent = $content -replace '@([\d\.]+)"', '"'
    Set-Content -Path $file.FullName -Value $newContent -NoNewline
    Write-Host "Fixed: $($file.Name)"
}

Write-Host "All imports fixed!"

