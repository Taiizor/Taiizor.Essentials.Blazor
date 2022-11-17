using System.Globalization;
using Taiizor.Essentials.Blazor.Value;

namespace Taiizor.Essentials.Blazor.Helper
{
    public class Culture
    {
        public static CultureInfo ConvertCulture(string Culture, bool Override = false)
        {
            try
            {
                return new CultureInfo(Culture, Override);
            }
            catch
            {
                return new CultureInfo(Internal.DefaultCulture, Override);
            }
        }
    }
}