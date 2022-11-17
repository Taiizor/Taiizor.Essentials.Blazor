using Microsoft.JSInterop;

namespace Taiizor.Essentials.Blazor.Helper
{
    internal class Interop
    {
        public static void CheckRuntime(IJSRuntime JSR)
        {
            if (JSR is null)
            {
                throw new ArgumentNullException(nameof(JSR));
            }
        }
    }
}