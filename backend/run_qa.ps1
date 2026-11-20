param(
    [switch]$SoloInforme
)

$ErrorActionPreference = "Stop"

try {
    # Obtener la ruta real tanto si se ejecuta como .ps1 como compilado en .exe
    $ScriptPath = if ($MyInvocation.MyCommand.Path) {
        $MyInvocation.MyCommand.Path
    } else {
        [System.Diagnostics.Process]::GetCurrentProcess().MainModule.FileName
    }
    $BackendRoot = Split-Path -Parent $ScriptPath

    $VenvPython = Join-Path $BackendRoot ".venv\Scripts\python.exe"
    $AgentScript = Join-Path $BackendRoot "qa_agent.py"

    if (-not (Test-Path $AgentScript)) {
        throw "No se encontró qa_agent.py en: $AgentScript"
    }

    $PythonExe = if (Test-Path $VenvPython) { $VenvPython } else { "python" }

    Write-Host "===============================================" -ForegroundColor Cyan
    Write-Host "         AGENTE QA AUTOMATIZADO - GOGUAY       " -ForegroundColor Cyan
    Write-Host "===============================================" -ForegroundColor Cyan
    Write-Host ""

    if (-not $SoloInforme) {
        $email = Read-Host "Introduce el email de prueba (o pulsa ENTER para omitir login)"
        if (-not [string]::IsNullOrWhiteSpace($email)) {
            $securePass = Read-Host "Introduce la contraseña" -AsSecureString
            $bstr = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($securePass)
            $plainPass = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($bstr)
            [System.Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)

            $env:GOGUAY_TEST_EMAIL = $email.Trim()
            $env:GOGUAY_TEST_PASSWORD = $plainPass
        } else {
            $env:GOGUAY_TEST_EMAIL = ""
            $env:GOGUAY_TEST_PASSWORD = ""
        }
    }

    Write-Host "`nIniciando pruebas QA de GoGuay (salidas en backend\QA)..." -ForegroundColor Green

    if ($SoloInforme) {
        & $PythonExe $AgentScript --solo-informe
    } else {
        & $PythonExe $AgentScript
    }
}
catch {
    Write-Host "`n❌ ERROR DURANTE LA EJECUCIÓN:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Yellow
}
finally {
    Write-Host ""
    Read-Host "Pulsa ENTER para cerrar esta ventana"
}