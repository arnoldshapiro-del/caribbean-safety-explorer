# Downloads 55 Caribbean photos from Pexels to /public/images/{dest}/
$base = "C:\Users\arnol\Desktop\Project Files Do Not Delete\caribbean-safety-explorer\public\images"

$plan = @{
  "aruba" = @{
    "hero"       = 1289698
    "gallery-1"  = 4316233
    "gallery-2"  = 5874624
    "gallery-3"  = 4710783
    "gallery-4"  = 12813576
    "gallery-5"  = 20096423
    "gallery-6"  = 10874220
    "gallery-7"  = 37088030
    "gallery-8"  = 11480944
    "gallery-9"  = 27865066
    "gallery-10" = 32741900
  }
  "cancun" = @{
    "hero"       = 8437275
    "gallery-1"  = 20210509
    "gallery-2"  = 18118993
    "gallery-3"  = 5960710
    "gallery-4"  = 476692
    "gallery-5"  = 20210504
    "gallery-6"  = 27898572
    "gallery-7"  = 3651084
    "gallery-8"  = 90947
    "gallery-9"  = 6422468
    "gallery-10" = 4241272
  }
  "playa" = @{
    "hero"       = 11423491
    "gallery-1"  = 36587649
    "gallery-2"  = 16116483
    "gallery-3"  = 17060218
    "gallery-4"  = 20192216
    "gallery-5"  = 16147201
    "gallery-6"  = 20233240
    "gallery-7"  = 17060216
    "gallery-8"  = 6129358
    "gallery-9"  = 36603889
    "gallery-10" = 944433
  }
  "puntacana" = @{
    "hero"       = 29798969
    "gallery-1"  = 2646066
    "gallery-2"  = 2646067
    "gallery-3"  = 149667
    "gallery-4"  = 10956539
    "gallery-5"  = 11227586
    "gallery-6"  = 11227879
    "gallery-7"  = 2646069
    "gallery-8"  = 13990993
    "gallery-9"  = 33231730
    "gallery-10" = 14138055
  }
  "costarica" = @{
    "hero"       = 10736536
    "gallery-1"  = 919494
    "gallery-2"  = 15041592
    "gallery-3"  = 19515012
    "gallery-4"  = 6198925
    "gallery-5"  = 18628415
    "gallery-6"  = 17311461
    "gallery-7"  = 10621173
    "gallery-8"  = 16863800
    "gallery-9"  = 34096275
    "gallery-10" = 33312531
  }
}

$ok = 0
$fail = 0
$small = @()

foreach ($dest in $plan.Keys) {
  foreach ($file in $plan[$dest].Keys) {
    $id = $plan[$dest][$file]
    $url = "https://images.pexels.com/photos/$id/pexels-photo-$id.jpeg?auto=compress&cs=tinysrgb&w=1600"
    $out = Join-Path $base "$dest\$file.jpg"
    try {
      Invoke-WebRequest -Uri $url -OutFile $out -TimeoutSec 60 -UserAgent "Mozilla/5.0" -ErrorAction Stop
      $sz = (Get-Item $out).Length
      if ($sz -lt 51200) {
        $small += "$dest/$file.jpg ($sz bytes, ID=$id)"
        $fail++
      } else {
        $ok++
      }
    } catch {
      $fail++
      Write-Output ("FAIL $dest/$file.jpg ID=$id : " + $_.Exception.Message)
    }
  }
}

Write-Output "---"
Write-Output ("OK: $ok / 55")
Write-Output ("FAIL: $fail")
if ($small.Count -gt 0) {
  Write-Output "Too-small files (likely error pages):"
  $small | ForEach-Object { Write-Output "  $_" }
}

# Clean up TEST.jpg if it exists
Remove-Item "C:\Users\arnol\Desktop\Project Files Do Not Delete\caribbean-safety-explorer\public\images\aruba\TEST.jpg" -ErrorAction SilentlyContinue
