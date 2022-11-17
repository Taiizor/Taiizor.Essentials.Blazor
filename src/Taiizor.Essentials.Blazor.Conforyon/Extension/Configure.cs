using Taiizor.Essentials.Blazor.Conforyon.Value;

namespace Taiizor.Essentials.Blazor.Conforyon.Extension
{
    public static class Configure
    {
        public static void UseConforyon(this object Builder)
        {
            Internal.ConforyonState = true;
        }
    }
}